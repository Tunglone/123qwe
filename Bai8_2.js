var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;
console.log(x);
/*
a-- làm giảm giá trị của a xuống 9 và trả về 10
b++ làm tăng giá trị của b lên 19 và trả về 18
++b làm tăng và đồng thời trả về giá trị của b là 20
++a làm tăng và đồng thời trả về giá trị của a là 10
==> 10 + 18 - 20 - 10 = -2
*/
