'use strict';

function split(item){
  if(item.includes('-')){
    let array = item.split('-');
    return {key:array[0] , count:parseInt(array[1],10)};
  }
  if(item.includes(':')){
    let array = item.split(':');
    return {key:array[0] , count:parseInt(array[1],10)}
  }
  if(item.includes("[")){
    let key = item.charAt(0);
    let count = parseInt(item.substr(2,item.length -1));
    return {key ,count};
  }

}


function push(result,key,count){
  for (var i = 0; i < count; i++) {
    result.push(key);
  }
}

function expend(collection){
  let result = [];
  for(let item of collection){
    if(item.length === 1){
      result.push(item);
    }
    else{
      let {key, count} = split(item);
      push(result,key,count);
    }
  }
  return result;
}

function find(collection,ch){
  for(let item of collection){
    if(item.key === ch){
      return item;
    }
  }
  return null;
}


function summarize(colletion){
  let result = [];
  for(let item of colletion){
    let obj  =  find(result,item);
    if(obj){
      obj.count++;
    }else{
      result.push({key:item , count:1});
    }
  }
  return result;
}

module.exports = function countSameElements(collection) {
  let expendedArray  = expend(collection);
  return summarize(expendedArray);

}
