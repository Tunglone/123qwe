const Circle = function(x, y ,radius){
    this.x = x,
    this.y = y,
    this.radius = radius
}
module.exports = Circle;

const Circle = require('./circle');
Circle.prototypes.isOverlapped = function(circle){
}
