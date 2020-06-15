console.log('Hello Chris, ya dumb betch!');

let movementDisplay = document.getElementById("movement");
let gameStatus = document.getElementById("status");
var gameZone = document.getElementById("gameZone");
let ctx = gameZone.getContext("2d");
ctx.clearRect(0, 0, 500, 500);





function gameObject(x, y){
    //this.fillText = text;
    this.x = x;
    this.y = y;
    this.render = function(text){
        ctx.font = "20px Arial"
        ctx.fillText(text, this.x, this.y)
    }
    this.playerMove = function(){
        //user presses a key and changes this.x and this.y
        //user presses D this.x += 5;
    }
    this.alienMove = function(){
        //updates this.x and this.y
    }
    this.starMove = function(){
        //move negatively along the y-axis
    }
}





let rocket = new gameObject(100, 100)
    rocket.playerMove();
    rocket.render("🚀")
let alien = new gameObject("👽", 20, 0)
let star = new gameObject("⭐️", 30, 30)