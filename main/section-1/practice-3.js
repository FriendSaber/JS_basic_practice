'use strict';

var Exports3 = function () {
  module.exports = function collectSameElements(collectionA, objectB) {
      var arr = new Array();
      for (var i = 0; i < collectionA.length; i++){
        for(var j=0;j<objectB.value.length;j++){
          if(collectionA[i]===objectB.value[j]){
            arr.push(collectionA[i]);
          }
              }
          }
          return arr;
      }
};
Exports3();
