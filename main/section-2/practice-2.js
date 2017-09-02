'use strict';

function split(item){
    let array = item.split('-');
    return {key:array[0] , count:parseInt(array[1],10)};
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
  //var arr = new Array();
  //arr.push({key: collection[0], count: 1});
  //
  //for (var i = 1; i < collection.length; i++){
  //  var flag =0;
  //  var student = new Object();//中间转换量
  //  for(var j=0;j<arr.length;j++){
  //    if(collection[i].charAt(0)===arr[j].key){
  //      //if(collection[i].toString().charAt(1)==='-'){
  //      // arr[j].count=5;//collection[i].charAt(2);charCodeAt(2)-48
  //      // }
  //      arr[j].count++;
  //      flag=1;
  //    }
  //  }
  //  if(flag==0){
  //    //arr.push({key:collection[i],count:1})
  //    student.key=collection[i].charAt(0);
  //    if(collection[i].charAt(0)==='d')
  //      student.count=5;
  //    else
  //      student.count=1;
  //    arr.push(student);
  //  }
  //}
  //
  //return arr;

 let expanedArray= expend(collection);
    return summarize(expanedArray);

}
