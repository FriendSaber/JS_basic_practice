  'use strict';

  function  includes(collectionB,ch){
      for(let item of collectionB){
          if(item == ch){
              return true;
          }
      }
      return false;
  }


module.exports = function collectSameElements(collectionA, collectionB) {
    var str = [];
    for(let item of collectionA){
        if(includes(collectionB,item)){
            str.push(item);
        }
    }
    return str;
};

