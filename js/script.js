console.log('Hello Chris, ya dumb betch!');

let movementDisplay = document.getElementById("movement");
let gameStatus = document.getElementById("status");
var gameZone = document.getElementById("gameZone");
let ctx = gameZone.getContext("2d");
ctx.clearRect(0, 0, 500, 500);



function gameObject(x, y, color, width, height){
    //this.fillText = text;
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = height;
    this.width = width;
    this.alive = true;
    this.render = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    // this.playerMove = function(){
    //     //user presses a key and changes this.x and this.y
    //     //user presses D this.x += 5;
    // }
    // this.alienMove = function(){
    //     //updates this.x and this.y
    // }
    // this.starMove = function(){
    //     //move negatively along the y-axis
    // }
}



let player = new gameObject(225, 300, "white", 50, 50);
let alien = new gameObject(100, 100, "chartreuse", 50, 50);
let star = new gameObject(300, 300, "gold", 50, 50);
