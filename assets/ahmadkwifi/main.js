// // function openNav() {
//   document.getElementById("mySidenav").style.height = "50%";
//   document.getElementById("containerBody").style.marginTop = "50%";
//   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.height = "0";
//   document.getElementById("containerBody").style.marginTop = "0";
//   document.body.style.backgroundColor = "white";
// }
function openNav() {
  document.getElementById("mySidenav").style.height = "100%";
  document.getElementById("mySideImage").style.height = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0%";
  document.getElementById("mySideImage").style.height = "0%";
  document.getElementById("Signature").style.height = "0%";
}

function openSignature() {
  document.getElementById("mySidenav").style.height = "100%";
  document.getElementById("Signature").style.height = "100%";
}
// 0000000000000000000000000000000000000
function move1() {
  var elem1 = document.getElementById("myBarHtml");

  var width = 10;
  var id = setInterval(frame, 80);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++;
      elem1.style.width = width + "%";
      elem1.innerHTML = width * 1 + "%";
      elem1.style.backgroundColor = "#eede00";
    }
  }
}
move1();

function move2() {
  var elem2 = document.getElementById("myBarCss");

  var width = 10;
  var id = setInterval(frame, 80);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++;
      elem2.style.width = width + "%";
      elem2.innerHTML = width * 1 + "%";
    }
  }
}
move2();

function move3() {
  var elem3 = document.getElementById("myBarJs");

  var width = 10;
  var id = setInterval(frame, 80);
  function frame() {
    if (width >= 55) {
      clearInterval(id);
    } else {
      width++;
      elem3.style.width = width + "%";
      elem3.innerHTML = width * 1 + "%";
      elem3.style.backgroundColor = "#eede00";
    }
  }
}
move3();

function move4() {
  var elem4 = document.getElementById("myBarBoot");
  var width = 10;
  var id = setInterval(frame, 80);
  function frame() {
    if (width >= 70) {
      clearInterval(id);
    } else {
      width++;
      elem4.style.width = width + "%";
      elem4.innerHTML = width * 1 + "%";
    }
  }
}
move4();

function move5() {
  var elem5 = document.getElementById("myBarUW");
  var width = 10;
  var id = setInterval(frame, 80);
  function frame() {
    if (width >= 85) {
      clearInterval(id);
    } else {
      width++;
      elem5.style.width = width + "%";
      elem5.innerHTML = width * 1 + "%";
      elem5.style.backgroundColor = "#eede00";
    }
  }
}
move5();
document.onmousemove = animateCircles;
var colors = ["grey", "grey", "yellow"];
function animateCircles(e) {
  var circle = document.createElement("div");
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle);

  circle.style.left = e.clientX + "px";
  circle.style.top = e.clientY + "px";

  var color = colors[Math.floor(Math.random() * colors.length)];
  circle.style.borderColor = color;

  circle.style.transition = "all 0.5s linear 0s";

  circle.style.left = circle.offsetLeft - 20 + "px";
  circle.style.top = circle.offsetTop - 20 + "px";

  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderWidth = "5px";
  circle.style.opacity = 0;
}
