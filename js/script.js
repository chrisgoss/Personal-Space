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

//create objects
let player = new gameObject(225, 300, "gray", 50, 50);
let alien = new gameObject(100, 100, "green", 50, 50);
let star = new gameObject(300, 300, "gold", 50, 50);

//main game loop
const gameTick = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    movementDisplay.innerText = ""
    if (alien.alive){
        detectHit()
    } else {
        clearInterval(gameLoop)
    }
    player.render()
    alien.render()
}

//detect hits
const detectHit = () => {
    if(player.x + player.width > alien.x
        && player.x < alien.x + alien.width
            && player.y < alien.y + alien.height
                && player.y + player.height > alien.y){
                    console.log("abduction!")
                    }
}

const checkCollide = () => {
    console.log ("collision")
}

const endGame = () => {
    clearInterval(gameLoop)
    console.log("GAME OVER")
}

let gameLoop = setInterval(gameTick, 60);


//add functionality for arrow keys
//add functionality for touch recognition
const movementHandler = (e) => {
    switch(e.key){
        case "w":
            player.y--
            break;
        case "a":
            player.x--
            break;
        case "s":
            player.y++
            break;
        case "d":
            player.x++
            break;
    }
}
document.addEventListener("keydown", movementHandler);