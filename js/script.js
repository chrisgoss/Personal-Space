console.log('Hello Chris, ya dumb betch!');

let movementDisplay = document.getElementById("movement");
let gameStatus = document.getElementById("status");
var gameZone = document.getElementById("gameZone");
let ctx = gameZone.getContext("2d");
ctx.clearRect(0, 0, 500, 500);





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
        this.y = this.y + 20
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
        this.y = this.y + 10
        if (this.y > gameZone.height){
            this.y = 0
            this.x = Math.random() * gameZone.width
        }
    }
}

let player = new gameObject(225, 300, "gray", 50, 50);
let alien = new alienObject(0, 0, "green", 50, 50);
let star = new starObject(0, 0, "gold", 50, 50);





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
const starHit = () => {
    if(player.x + player.width > star.x
        && player.x < star.x + star.width
            && player.y < star.y + star.height
                && player.y + player.height > star.y){
                    endGame()
                    }
}





const movementHandler = (e) => {
    switch(e.key){
        case "w":
            player.y = player.y - 10;
            break;
        case "a":
            player.x = player.x - 10;
            break;
        case "s":
            player.y = player.y + 10;
            break;
        case "d":
            player.x = player.x + 10;
            break;
    }
}
document.addEventListener("keydown", movementHandler);