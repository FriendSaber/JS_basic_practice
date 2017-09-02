'use strict';

function incoudes(collection,ch ){
    for(let item of collection){
        if(ch === item){
            return true;
        }
    }
    return  false;
}

  module.exports = function collectSameElements(collectionA, objectB) {
      var arr = new Array();

      for(let item of collectionA){
          if(incoudes(objectB.value,item ) ){
              arr.push(item);
          }
      }
      return arr;
  }
