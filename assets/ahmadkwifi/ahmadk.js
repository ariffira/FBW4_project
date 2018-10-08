// function openNav() {
//   document.getElementById("mySidenav").style.width = "40%";
//   document.getElementById("mySidenav2").style.width = "120%";

//   document.getElementById("main").style.marginLeft = "250px";
//   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("mySidenav2").style.width = "0";

//   document.getElementById("main").style.marginLeft = "0";
//   document.body.style.backgroundColor = "red";
// }

function openNav() {
  document.getElementById("mySidenav").style.width = "25%";
  document.getElementById("main").style.marginLeft = "25%";
  document.body.style.backgroundColor = "rgb(236, 194, 160)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("AboutMe").style.width = "0";
  document.getElementById("MyWork").style.width = "0";
  document.getElementById("ContactMe").style.width = "0";
  document.getElementById("Signature").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

function openAboutme() {
  document.getElementById("AboutMe").style.width = "75%";
  document.getElementById("AboutMe").style.marginRight = "60%";
  document.getElementById("AboutMe").style.zIndex = "1";
  document.getElementById("MyWork").style.zIndex = "0";
  document.getElementById("ContactMe").style.zIndex = "0";
  document.getElementById("Signature").style.zIndex = "0";
}

function openMyWork() {
  document.getElementById("MyWork").style.width = "75%";
  document.getElementById("MyWork").style.marginRight = "60%";
  document.getElementById("AboutMe").style.zIndex = "0";
  document.getElementById("MyWork").style.zIndex = "1";
  document.getElementById("ContactMe").style.zIndex = "0";
  document.getElementById("Signature").style.zIndex = "0";
}
function openContactMe() {
  document.getElementById("ContactMe").style.width = "75%";
  document.getElementById("ContactMe").style.marginRight = "60%";
  document.getElementById("AboutMe").style.zIndex = "0";
  document.getElementById("MyWork").style.zIndex = "0";
  document.getElementById("ContactMe").style.zIndex = "1";
  document.getElementById("Signature").style.zIndex = "0";
}

function openSignature() {
  document.getElementById("Signature").style.width = "75%";
  document.getElementById("Signature").style.marginRight = "60%";
  document.getElementById("AboutMe").style.zIndex = "0";
  document.getElementById("MyWork").style.zIndex = "0";
  document.getElementById("ContactMe").style.zIndex = "0";
  document.getElementById("Signature").style.zIndex = "1";
}
document.onmousemove = animateCircles;
var colors = ["EC407A", "#6cf", "#eba13a"];
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

// ==========================================

function myMoveImage() {
  var elem = document.getElementById("MyAhmadImage");
  var elem1 = document.getElementById("MytextAhmadAbout");
  var pos = 15;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 263) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem1.style.bottom = pos + "px";
      elem.style.left = pos + "px";
      elem1.style.right = pos + "px";
    }
  }
}
//  goooooooogle maps
