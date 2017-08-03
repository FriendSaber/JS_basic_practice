'use strict';

var Exports3_1 = function () {
  module.exports = function createUpdatedCollection(collectionA, objectB) {
      var arr = new Array();
      /*arr.push({key:collectionA[0],count:2});*/

      for (var i = 0; i < collectionA.length; i++){
        // var temp=new Object();
        for(var j=0;j<objectB.value.length;j++){
          if(collectionA[i].key===objectB.value[j]){
            //temp.count=collectionA[i].count-1;
            collectionA[i].count=collectionA[i].count-1;
            // console.log(collectionA[i].key+" "+collectionA[i].count);
            break;
          }
          //else {
          //    temp.count=collectionA[i].count;
          //  }
        }
        arr.push({key:collectionA[i].key,count:collectionA[i].count});
          }

          //for(var i=0;i<arr.length;i++){
          //console.log("\n"+arr[i].key+" "+arr[i].count+"\n");
          //}

          return arr;
      }
};
Exports3_1();
