let canvas = document.getElementById("canvas");
let btn = document.getElementById("button");

function randomColor() {
  let value = "0123456789ABCDEF";
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    hex = hex + value[Math.floor(Math.random(value) * 16)];
  }

  canvas.style.background = hex;
}

// console.log(randomColor())

btn.addEventListener("click", randomColor);
btn.style.cursor = "pointer";
