  'use strict';

  var Exports = function () {
      module.exports = function collectSameElements(collectionA, collectionB) {
          var str = new Array();
          for (var i = 0; i < collectionA.length; i++) {
              for (var j = 0; j < collectionB.length; j++) {
                  if (collectionA[i] === collectionB[j]) {
                      str.push(collectionA[i]);
                  }
              }
          }

          return str;
      }
  };
  Exports();
