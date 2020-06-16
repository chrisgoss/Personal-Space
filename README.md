# Personal-Space

Continuous vertical scrolling game, wherein the Player collects Stars and avoids Aliens.
* Mobile-oriented design
* Consistent, fingertip-size targets
* Clean interface
* Language/Colorblind-friendly
* Intuitive gameplay
* Chill retro vibes
## WIREFRAME
![](https://i.imgur.com/IwWzCY5.jpg)
## MINIMUM VIABLE PRODUCT (MVP)
☑ Canvas game board
☑ WASD & arrow mobility
☑ Objects
    ☑ Stars (completed)
    ☑ Aliens (incomplete w/o multiple possible trajectory)
☐ State Button (load screen in neutral, then flips start/stop)
☐ Score Button (+1 stars, -5 aliens, 0 = game over)
☑ Collision Detection
☑ End game on alien impact
## STRETCH
* EndGame Condition
    * Score = 0
* Add random x-trajectory for Aliens
* Deploy Special
    * Use # of score to deploy alienEMP with duration
* Image Variations (3 or 5 randomized)
    * Stars
    * Aliens
* Obstacles
    * Clouds = visual obstacle
    * Planets = mobility obstacle
* Items
    * Bubble
        * Shield with duration
    * Chevron
        * Player speed increase
    * Lighting
        * Objects double value
## TECH
* HTML Canvas
* CSS
* JS
    * Button binding
        * Start/Stop game 
        * Score display / deploy special
    * Player movement keybinding
    * 
    * Object trajectory
    * Collision detection
    * Win/Lose conditions
## MEDIA
* Visual
    * Background image
    * Player
    * Objects
        * Star
        * Alien
    * Obstacles
        * Cloud
        * Planet
    * Items
        * Shield
        * Speed
        * 2x
* Audial
    * Background music
    * Start/Stop
    * EndGame
    * Collect
    * Damage Taken
    * Item effects
        * Shield
        * Speed
        * 2x
## ROADBLOCKS
* Incremental Increases
    * Object/Item speed
    * Object/Item rate
* Canvas maximum Object/Item count
* Item effects
* Attack capability
## SOURCES
* Canvas Crawler for dem boxes
* TicTacToe for gameState button (load game in neutral)
* TempConverter for gameScore button (display score on button, deploy special on click)
* Weston for always 'splainin dem fn's
* Karly & Sarah for Mommin' me