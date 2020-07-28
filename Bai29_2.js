var math = {
  add: function(a, b) {
    return a + b;
  },
  multiply: function(a, b){
    return a * b
  }
};
module.exports = math;

var Math = require('./math')
console.log(Math.multiply(2, 4));
