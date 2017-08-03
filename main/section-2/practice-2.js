'use strict';

module.exports = function countSameElements(collection) {
  var arr = new Array();
  arr.push({key: collection[0], count: 1});

  for (var i = 1; i < collection.length; i++){
    var flag =0;
    var student = new Object();//中间转换量
    for(var j=0;j<arr.length;j++){
      if(collection[i].charAt(0)===arr[j].key){
        //if(collection[i].toString().charAt(1)==='-'){
        // arr[j].count=5;//collection[i].charAt(2);charCodeAt(2)-48
        // }
        arr[j].count++;
        flag=1;
      }
    }
    if(flag==0){
      //arr.push({key:collection[i],count:1})
      student.key=collection[i].charAt(0);
      if(collection[i].charAt(0)==='d')
        student.count=5;
      else
        student.count=1;
      arr.push(student);
    }
  }

  return arr;

}
