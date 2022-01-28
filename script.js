let Sun = document.querySelector(".sun");
let Body = document.querySelector("body");
let Logo = document.querySelector("#logo")
console.log(Sun);
console.log(Body);


function Light() {
  Body.style.background = "rgb(255,255,255,0.1)";
  Body.style.color = "black"
  Logo.src = "./images/4.jpg"
  Sun.src = "./images/moon (2).png"
  console.log("6");
}

Sun.addEventListener("click", Light);
