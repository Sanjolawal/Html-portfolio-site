  //  Darkness to Sunlight

let Sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");
let Body = document.querySelector("body");
let Logo = document.querySelector("#logo");
let nav = document.querySelectorAll("#nav");
let video = document.querySelector("#video");
let middle = document.querySelector(".middle");
let service = document.querySelectorAll("#service");
let project = document.querySelectorAll("#project");
let one = document.querySelectorAll("#one");
let two = document.querySelectorAll("#two");
let github = document.querySelector("#github");
let linkedin = document.querySelector("#linkedin");
let consult = document.querySelector("#consult");
let dev = document.querySelector("#dev");
let seclogo = document.querySelector(".seclogo");
let menu = document.querySelector(".menubar");

console.log(Sun);
console.log(Body);
console.log(nav);
console.log(project);
console.log(menu);

function Light() {
  Body.style.background = "rgb(255,255,255,0.1)";
  Body.style.color = "black";
  Logo.src = "./images/4.jpg";
  Sun.style.display = "none";
  moon.style.display = "inline-block";
  nav[0].style.color = "black";
  nav[1].style.color = "black";
  nav[2].style.color = "black";
  nav[3].style.color = "black";
  video.style.borderColor = "black";
  service[0].style.borderColor = "black";
  service[1].style.borderColor = "black";
  service[2].style.borderColor = "black";
  middle.style.background = "white";
  project[0].style.borderColor = "black";
  project[1].style.borderColor = "black";
  project[2].style.borderColor = "black";
  one[0].style.color = "black";
  one[1].style.color = "black";
  one[2].style.color = "black";
  two[0].style.color = "black";
  two[1].style.color = "black";
  two[2].style.color = "black";
  github.src = "./images/icons8-github.svg";
  linkedin.src = "./images/icons8-linkedin.svg";
  consult.src = "./images/icons8-consultation-50.png";
  dev.src = "./images/icons8-nuke.svg";
  seclogo.src = "./images/seclogo.png";
  menu.src = "./images/menu2.png";
}

Sun.addEventListener("click", Light);


  // Light to darkness

function Dark() {
  Body.style.background = "rgb(24,24,24)";
  Body.style.color = "white";
  Logo.src = "./images/logo.jpg";
  Sun.style.display = "inline-block";
  moon.style.display = "none";
  nav[0].style.color = "white";
  nav[1].style.color = "white";
  nav[2].style.color = "white";
  nav[3].style.color = "white";
  video.style.borderColor = "rgb(255,255,255,0.3)";
  service[0].style.borderColor = "rgb(255,255,255,0.3)";
  service[1].style.borderColor = "rgb(255,255,255,0.3)";
  service[2].style.borderColor = "rgb(255,255,255,0.3)";
  middle.style.background = "rgb(37,38,43)";
  project[0].style.borderColor = "rgb(255,255,255,0.3)";
  project[1].style.borderColor = "rgb(255,255,255,0.3)";
  project[2].style.borderColor = "rgb(255,255,255,0.3)";
  one[0].style.color = "white";
  one[1].style.color = "white";
  one[2].style.color = "white";
  two[0].style.color = "white";
  two[1].style.color = "white";
  two[2].style.color = "white";
  github.src = "./images/github.svg";
  linkedin.src = "./images/linkedin.svg";
  consult.src = "./images/cons-icon.png";
  dev.src = "./images/dev icon.svg";
  seclogo.src = "./images/seclogo.png";
  menu.src = "./images/menu-bar.svg";
}

moon.addEventListener("click", Dark);


// Scrolling to respective area when nav btn is clicked

let nav1 = document.querySelector(".nav1")
let nav2 = document.querySelector(".nav2")
let nav3 = document.querySelector(".nav3")
console.log(nav1)

nav1.addEventListener("click", scroll)
// function scroll() {
//   scrollTo(0, 1770)
//   console.log("you")
// }

