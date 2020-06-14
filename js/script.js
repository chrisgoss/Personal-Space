console.log('Hello Chris, ya dumb betch!');

let movementDisplay = document.getElementById("movement");
let gameStatus = document.getElementById("status");
var canvas = document.getElementById("game");

let ctx = game.getContext("2d");

function gameObject(text, x, y){
    this.fillText = text;
    this.x = x;
    this.y = y;
    this.render = function(){
        ctx.fillText(this.text, this.x, this.y)
    }
}

let rocket = new gameObject("🚀", 10, 10)
console.log("blastoff!");
let alien = new gameObject("👽", 20, 20)
let star = new gameObject("⭐️", 30, 30)