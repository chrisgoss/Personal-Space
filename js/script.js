console.log('Hello Chris, ya dumb betch!');

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, 400, 600);

ctx.fillStyle = "#f00";

ctx.fillRect(20, 20, 100, 100);