var math = {
  add: function(a, b) {
    return a + b;
  },
  sum: function(arr){
    var kq = 0;
    for(var i = 0; i < arr.length; i++){
      kq += arr[i]
    }
    return kq
  }
};

module.exports = math;

var Math = require('./math');
var result = Math.sum([1, 2, 3]);
console.log(result);
