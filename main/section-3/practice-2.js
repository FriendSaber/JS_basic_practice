'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var arr = new Array();

  for (var i = 0; i < collectionA.length; i++){

    for(var j=0;j<objectB.value.length;j++){
      if(collectionA[i].key===objectB.value[j]){

        if(objectB.value[j]==="a"||objectB.value[j]==="d"){
          collectionA[i].count=collectionA[i].count-1;
        }
        if(objectB.value[j]==="e"){
          collectionA[i].count=collectionA[i].count-2;
        }
        if(objectB.value[j]==="f"){
          collectionA[i].count=collectionA[i].count-3;
        }

        break;
      }

    }
    arr.push({key:collectionA[i].key,count:collectionA[i].count});
  }

  return arr;
}
