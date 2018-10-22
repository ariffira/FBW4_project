//deleting one value from another
subtraction();
function subtraction() {
  var x = document.getElementById("valueX").value;
  var y = document.getElementById("valueY").value;
  var z = x - y;
  document.getElementById("resultesID").innerHTML = z;
  console.log(z);
}

Adding();
function Adding() {
  var x = parseInt(document.getElementById("valueX").value);
  var y = parseInt(document.getElementById("valueY").value);
  var z = x + y;
  document.getElementById("resultesID").innerHTML = z;
  console.log(z);
}

multipli();
function multipli() {
  var x = document.getElementById("valueX").value;
  var y = document.getElementById("valueY").value;
  var z = x * y;
  document.getElementById("resultesID").innerHTML = z;
  console.log(z);
}
division();
function division() {
  var x = document.getElementById("valueX").value;
  var y = document.getElementById("valueY").value;
  var z = x / y;
  document.getElementById("resultesID").innerHTML = z;
  console.log(z);
}
crement();
function crement() {
  var x = document.getElementById("valueX").value;
  z = ++x;
  var y = document.getElementById("valueY").value;
  m = ++y;
  document.getElementById("resultesID").innerHTML =
    "valuex=" + z + "      " + "&" + "       " + "valuey=" + m;
  console.log(z);
}

Decrement();
function Decrement() {
  var x = document.getElementById("valueX").value;
  z = --x;
  var y = document.getElementById("valueY").value;
  m = --y;
  document.getElementById("resultesID").innerHTML =
    "valuex=" + z + "      " + "&" + "       " + "valuey=" + m;
  console.log(z);
}
sqort();
function sqort() {
  var x = document.getElementById("valueX").value;
  var z = Math.sqrt(x);

  document.getElementById("resultesID").innerHTML = z;
  console.log(z);
}
precent();
function precent() {
  var x = document.getElementById("valueX").value;
  var z = x / 100;

  document.getElementById("resultesID").innerHTML = z;
  console.log(z);
}
powerX();
function powerX() {
  var x = document.getElementById("valueX").value;
  var y = document.getElementById("valueY").value;
  var z = Math.pow(x, y);

  document.getElementById("resultesID").innerHTML = z;
  console.log(z);
}

// ------
tannX();
function tannX() {
  var x = document.getElementById("valueX").value;
  var z = Math.tan(x);

  document.getElementById("resultesID").innerHTML = z;
  console.log(z);
}

sinx();
function sinx() {
  var x = document.getElementById("valueX").value;
  var z = Math.sin(x);

  document.getElementById("resultesID").innerHTML = z;
  console.log(z);
}

cosx();
function cosx() {
  var x = document.getElementById("valueX").value;
  var z = Math.cos(x);

  document.getElementById("resultesID").innerHTML = z;
  console.log(z);
}
EQX();
function EQX() {
  var a = document.getElementById("valueA").value;
  var b = document.getElementById("valueB").value;
  var c = document.getElementById("valueC").value;
  var D = c / a - b / a;

  document.getElementById("resultesID").innerHTML = D;
  console.log(D);
}
REX1();
function REX1() {
  var a = document.getElementById("valueA").value;
  var b = document.getElementById("valueB").value;
  var c = document.getElementById("valueC").value;

  var x1 = -b / (2 * a) + Math.sqrt(b * b - 4 * a * c) / (2 * a);
  document.getElementById("resultesID").innerHTML = x1;
  console.log(x1);
}
REX2();
function REX2() {
  var a = document.getElementById("valueA").value;
  var b = document.getElementById("valueB").value;
  var c = document.getElementById("valueC").value;

  var x2 = -b / (2 * a) - Math.sqrt(b * b - 4 * a * c) / (2 * a);
  document.getElementById("resultesID").innerHTML = x2;
  console.log(x1);
}

// info();
// function info() {
//   var a = "Hello I'm Ahmad";

//   var image = (document.getElementById("myImage").src = "./img/ahmadlogio.png");
//   alert(a + image);
// }
$("#myImage").click(function() {
  $("#myalert").show();
});
