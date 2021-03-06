///////////////////////// STRETCH GOALS FOR DAYS!!!!!
// FIXME: prevent player walking off Canvas into the abyss
// TODO: Objects invisible on collision, but continue on default trajectory
// TODO: add additional game features (alien1s/stars of various speed/value, and items/items of various effects)
// TODO: mutiple Objects on Canvas: loop w restrictions how little/much objects visible, generate objs within loop
// TODO: ^^^ separate array of properties (colors, speed) Math.random OR integers
/////////////////////////



var isGameOver = false;
var gameZone = document.getElementById("gameZone");
var stateBtn = document.getElementById("stateBtn");
var scoreBtn = document.getElementById("scoreBtn");
var score = 10;
let movementDisplay = document.getElementById("movement");
let gameState = document.getElementById("State");
let ctx = gameZone.getContext("2d");
ctx.clearRect(0, 0, 500, 500);
stateBtn.addEventListener("click", startShit)
stateBtn.innerText = "START";
scoreBtn.innerText = "SCORE";
let gameLoop;
const movementHandler = (e) => {
    // IF THERE IS A KEYBOARD EVENT HAPPENING WHEN THE GAME WINDOW IS HIGHLIGHTED, STILL ACTIVATE GAME MOVEMENT (YOSHI!)
    e = e || window.event;
    // USE "keyCode" FOR ALL KEYBOARD EVENTS, NOT JUST "key" FOR LETTER KEYBOARD EVENTS
    switch(e.keyCode){
        // WASD
        case 87:
            player.y = player.y - 50;
            break;
        case 65:
            player.x = player.x - 50;
            break;
        case 83:
            player.y = player.y + 50;
            break;
        case 68:
            player.x = player.x + 50;
            break;
        // ARROWS
        case 38:
            player.y = player.y - 50;
            break;
        case 37:
            player.x = player.x - 50;
            break;
        case 40:
            player.y = player.y + 50;
            break;
        case 39:
            player.x = player.x + 50;
            break;
    }
}



///////////////////////////////////////////////////////////////////////////
///////////////////////// START GAME /////////////////////////
///////////////////////////////////////////////////////////////////////////
const gameTick = () => {
    if (!isGameOver) {
        ctx.clearRect(0, 0, gameZone.width, gameZone.height)
        player.render()
        alien1.render()
        alien2.render()
        star.render()
        scoreBtn.innerText = score
        if (score < 5) {
            scoreBtn.style.color = "firebrick";
        } else {
            scoreBtn.style.color = "black";
        }
        if (score > 0) {
            checkalien1Collision()
            checkalien2Collision()
            checkStarCollision()
        } else {
            endGame()
        }
    } 
}
function startShit(event) {
    isGameOver = false;
    score = 10;
    alien1.x = Math.random() * gameZone.width;
    alien1.y = 0;
    alien2.x = Math.random() * gameZone.width;
    alien2.y = 0;
    star.x = Math.random() * gameZone.width;
    star.y = 0;
    stateBtn.innerText = "GAME ON!"
    document.addEventListener("keydown", movementHandler);
    gameLoop = setInterval(gameTick, 60);
    stateBtn.removeEventListener("click", startShit)
}



///////////////////////////////////////////////////////////////////////////
///////////////////////// GAME OBJECTS /////////////////////////
///////////////////////////////////////////////////////////////////////////
let player = new gameObject(225, 400, "gray", 50, 50);
let alien1 = new alien1Object(this.x = Math.random() * gameZone.width, 0, "forestgreen", 50, 50);
let alien2 = new alien2Object(this.x = Math.random() * gameZone.width, 0, "green", 50, 50);
let star = new starObject(this.x = Math.random() * gameZone.width, 0, "gold", 50, 50);
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



//////////////////////////////////////////////////
// FIXME: figure out canvas wrapping player movement!!!
//////////////////////////////////////////////////
// function player(x, y){
//     this.x = x;
//     this.y = y;
//     if (this.y > gameZone.height){
//         this.y = 0;
//         this.alive = true;
//         this.prevAlive = true;
//         this.x = Math.random() * gameZone.width
//     }
// }



// GAME OBJECTS (THAT ARE ALSO CALLED "OBJECTS" IN MY README, BUT ARE DIFFERENT FROM FUTURE "OBSTACLES/ITEMS" LOL)
function alien1Object(x, y, color, width, height){
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
            this.y = 0;
            this.alive = true;
            this.prevAlive = true;
            this.x = Math.random() * gameZone.width
        }
    }
}
function alien2Object(x, y, color, width, height){
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
        this.y = this.y + 15
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



///////////////////////////////////////////////////////////////////////////
///////////////////////// COLLISIONS AND ENDBAME /////////////////////////
///////////////////////////////////////////////////////////////////////////
const checkalien1Collision = () => {
    if(player.x + player.width > alien1.x
        && player.x < alien1.x + alien1.width
            && player.y < alien1.y + alien1.height
                && player.y + player.height > alien1.y){
                    alien1.alive = false;
                    }
    if (alien1.prevAlive === true && alien1.alive === false) {
        score -= 2
        console.log("-2 =", score)
    }
    alien1.prevAlive = alien1.alive;
}
const checkalien2Collision = () => {
    if(player.x + player.width > alien2.x
        && player.x < alien2.x + alien2.width
            && player.y < alien2.y + alien2.height
                && player.y + player.height > alien2.y){
                    alien2.alive = false;
                    }
    if (alien2.prevAlive === true && alien2.alive === false) {
        score -= 3
        console.log("-3 =", score)
    }
    alien2.prevAlive = alien2.alive;
}
const checkStarCollision = () => {
    if(player.x + player.width > star.x
        && player.x < star.x + star.width
            && player.y < star.y + star.height
                && player.y + player.height > star.y){
                    star.alive = false;
                    }
    if (star.prevAlive === true && star.alive === false) {
        score += 1
        console.log("+1 =", score)
    }
    star.prevAlive = star.alive;
}
const endGame = () => {
    clearInterval(gameLoop)
    document.removeEventListener("keydown", movementHandler);
    scoreBtn.addEventListener("click", startShit);
    isGameOver = true;
    stateBtn.innerText = "GAMEOVER"
    scoreBtn.innerText = "RESTART?"
}