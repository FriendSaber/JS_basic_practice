'use strict';

var countNtotal = function (collectionA) {
  var str = new Array();
  str.push({key: collectionA[0], count: 1});

  for (var i = 1; i < collectionA.length; i++){
    var flag =0;
    var student = new Object();//中间转换量
    for(var j=0;j<str.length;j++){
      if(collectionA[i]===str[j].key){//或者collection[i].charAt(0)===arr[j].key
        str[j].count++;
        flag=1;
      }
    }
    if(flag==0){
      student.key=collectionA[i];
      student.count=1;
      str.push(student);
    }
  }

  return str;
};
var CountTotal = function (collectionA, objectB) {
  var arr = new Array();
  var str = countNtotal(collectionA);

  for (var i = 0; i < str.length; i++){

    for(var j=0;j<objectB.value.length;j++){
      if(str[i].key===objectB.value[j]){

        if(objectB.value[j]==="a"||objectB.value[j]==="d"){
          str[i].count=str[i].count-1;
        }
        if(objectB.value[j]==="e"){
          str[i].count=str[i].count-2;
        }
        if(objectB.value[j]==="f"){
          str[i].count=str[i].count-3;
        }

        break;
      }

    }
    arr.push({key:str[i].key,count:str[i].count});
  }

  return arr;
};
module.exports = function createUpdatedCollection(collectionA, objectB) {
  return CountTotal(collectionA, objectB);
}
