'use strict';

function incoudes(collection,ch ){
    for(let item of collection){
        if(ch === item){
            return true;
        }
    }
    return  false;
}

module.exports = function collectSameElements(collectionA, collectionB) {
  var arr = new Array();

    for(let item of collectionA){
        if(incoudes(collectionB[0],item ) ){
            arr.push(item);
        }
    }
      return arr;

}

