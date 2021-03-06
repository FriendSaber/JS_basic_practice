'use strict';

function  find(collection,ch){
  for(let item of collection){
    if(item.key === ch){
      return item;
    }
  }
  return null;
}

function  summarrize(collection){
  var result = [];
  for(let item  of collection){
    let obj = find(result,item);
    if(obj){
      obj.count++;
    }else{
      result.push({key:item,count:1});
    }
  }
  return result;
}

function includes(collection , ch){
  for(let item of collection){
    if(item === ch){
      return true;
    }
  }
  return false;
}

function  discount(collection , promotionItems){
  let result = [];
  for(let item of collection){
    let key = item.key;
    let count = item.count;
    if(includes( promotionItems , item.key)){
      count =count - Math.floor(count/3);
    }
    result.push({key , count});
  }
  return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let summarized = summarrize(collectionA);
  return discount(summarized , objectB.value);
}
