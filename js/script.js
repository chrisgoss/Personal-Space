//TODO: Make button activate game -- add event listeners to wasd again 
// BUGGIE: interval not clearing properly so the interval is like doubled or some shit 

//TODO: Make button show score

//TODO: Make lose condition score=<0



var isGameOver = false;
var gameZone = document.getElementById("gameZone");
var stateBtn = document.getElementById("stateBtn");
var scoreBtn = document.getElementById("scoreBtn");
let movementDisplay = document.getElementById("movement");
let gameState = document.getElementById("State");
let ctx = gameZone.getContext("2d");
ctx.clearRect(0, 0, 500, 500);

var score = 0

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

        //FIXME: recognize arrow movement keys
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

//starting right when page loads
let player = new gameObject(225, 300, "gray", 50, 50);
let alien = new alienObject(this.x = Math.random() * gameZone.width, 0, "green", 50, 50);
let star = new starObject(this.x = Math.random() * gameZone.width, 0, "gold", 50, 50);
stateBtn.addEventListener("click", startShit)



const gameTick = () => {
    if (!isGameOver) {
        ctx.clearRect(0, 0, gameZone.width, gameZone.height)
        player.render()
        alien.render()
        star.render()

        if (score >= 0){
            checkAlienCollision()
            checkStarCollision()
        } else {
            endGame()
        }
    } 
}

// button wrapping this to call the game loop to start
// statebtn to do the thing 
// event listener that would call vvvvv 

function startShit(event) {
    alien.x = Math.random() * gameZone.width;
    alien.y = 0;

    star.x = Math.random() * gameZone.width;
    star.y = 0;
    // activate wasd keys here homie 
    document.addEventListener("keydown", movementHandler);
    const gameLoop = setInterval(gameTick, 60);
    console.log(event.target)
    event.target.removeEventListener("click", startShit)
    isGameOver = false;
    // remove this event listener
}







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
    this.prevAlive = true;
    this.render = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
        this.y = this.y + 10
        if (this.y > gameZone.height){
            this.y = 0
            this.alive = true;
            this.prevAlive = true;
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
    this.prevAlive = true;
    this.render = function(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
        this.y = this.y + 5
        if (this.y > gameZone.height){
            this.y = 0
            this.alive = true;
            this.prevAlive = true;
            this.x = Math.random() * gameZone.width
        }
    }
}





const endGame = () => {
    clearInterval(gameTick)
    document.removeEventListener("keydown", movementHandler);
    stateBtn.addEventListener("click", startShit);
    isGameOver = true;
    console.log("GAME OVER")
}
const checkAlienCollision = () => {
    if(player.x + player.width > alien.x
        && player.x < alien.x + alien.width
            && player.y < alien.y + alien.height
                && player.y + player.height > alien.y){
                    // DECREMENTTTTT
                    alien.alive = false;
                    console.log('not yeet')
                    }
    if (alien.prevAlive === true && alien.alive === false) {
        score -= 5
        console.log('score', score)
    }
    alien.prevAlive = alien.alive;
}

const checkStarCollision = () => {
    // we collidin'
    if(player.x + player.width > star.x
        && player.x < star.x + star.width
            && player.y < star.y + star.height
                && player.y + player.height > star.y){
                    // inCREMENTTTTT
                    star.alive = false;
                    console.log('yeet')
                    }

    if (star.prevAlive === true && star.alive === false) {
        score += 1
        console.log('score', score)
    }
    star.prevAlive = star.alive;
}