//Đây là file math
var math = {
  add: function(a, b) {
    return a + b;
  }
};

module.exports = math;

var Math = require('./math')
Math.add(1, 2)
