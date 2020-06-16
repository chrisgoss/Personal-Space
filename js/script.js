var gameZone = document.getElementById("gameZone");
var stateBtn = document.getElementById("stateBtn");
var scoreBtn = document.getElementById("scoreBtn");
let movementDisplay = document.getElementById("movement");
let gameState = document.getElementById("State");
let ctx = gameZone.getContext("2d");
ctx.clearRect(0, 0, 500, 500);

const movementHandler = (e) => {
    switch(e.key){
        case "w":
            player.y = player.y - 50;
            break;
        case "a":
            player.x = player.x - 50;
            break;
        case "s":
            player.y = player.y + 50;
            break;
        case "d":
            player.x = player.x + 50;
            break;
        // case "38":
        //     player.y = player.y - 50;
        //     break;
        // case "37":
        //     player.x = player.x - 50;
        //     break;
        // case "40":
        //     player.y = player.y + 50;
        //     break;
        // case "39":
        //     player.x = player.x + 50;
        //     break;
    }
}
document.addEventListener("keydown", movementHandler);

let player = new gameObject(225, 300, "gray", 50, 50);
let alien = new alienObject(this.x = Math.random() * gameZone.width, 0, "green", 50, 50);
let star = new starObject(this.x = Math.random() * gameZone.width, 0, "gold", 50, 50);

const gameTick = () => {
    ctx.clearRect(0, 0, gameZone.width, gameZone.height)
    if (player.alive){
        alienHit()
    } else {
        clearInterval(gameLoop)
    }
    player.render()
    alien.render()
    star.render()
}
let gameLoop = setInterval(gameTick, 60);





function gameObject(x, y, color, width, height){
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
}





function alienObject(x, y, color, width, height){
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = height;
    this.width = width;
    this.alive = true;
    this.render = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
        this.y = this.y + 10
        if (this.y > gameZone.height){
            this.y = 0
            this.x = Math.random() * gameZone.width
        }
    }
}
function starObject(x, y, color, width, height){
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = height;
    this.width = width;
    this.alive = true;
    this.render = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
        this.y = this.y + 5
        if (this.y > gameZone.height){
            this.y = 0
            this.x = Math.random() * gameZone.width
        }
    }
}





const endGame = () => {
    clearInterval(gameLoop)
    console.log("GAME OVER")
}
const alienHit = () => {
    if(player.x + player.width > alien.x
        && player.x < alien.x + alien.width
            && player.y < alien.y + alien.height
                && player.y + player.height > alien.y){
                    endGame()
                    }
}
// const starHit = () => {
//     if(player.x + player.width > star.x
//         && player.x < star.x + star.width
//             && player.y < star.y + star.height
//                 && player.y + player.height > star.y){
//                     score++()
//                     }
// }