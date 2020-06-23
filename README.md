# Personal-Space

Continuous vertical scrolling game, wherein the Player collects Stars and avoids Aliens. I envisioned making a relaxing game that I could turn into a phone app that I could play in low-light conditions to relax before bed. The current iteration of this game lacks the additional features of "Obstacles", "Items", kawaii pixellated images, and lofi music/effects that I desire, but I will continue working on this as a passion project and am quite fond of it's unrefined appearance as it still speaks to the aesthetic I was pursuing.

* Mobile-oriented design (will learn how to utilize this later, for now stick to a small play area)
* Consistent, fingertip-size targets (between 50-80px?)
* Clean interface (this goes hand-in-hand with accessibility and intuitive-gameplay)
* Language/Colorblind-friendly (use very different images/shapes for game contents)
* Intuitive gameplay (so that an english language "how to play" is not needed)
* Chill retro vibes (the eighties was the best week of my life)
## WIREFRAME
![](https://i.imgur.com/IwWzCY5.jpg)
## MINIMUM VIABLE PRODUCT (MVP)
* Canvas game board
* WASD & arrow mobility
* Objects
    * Stars
    * Aliens
* State Button (load screen in neutral, then flips start/stop)
* Score Button (+1 stars, -5 aliens, 0 = game over)
* Collision Detection
* EndGame Condition
    * Score = 0
## STRETCH
* Deploy Special
    * Use # of score to deploy alienEMP with duration
* Image Variations (3 or 5 randomized)
    * Stars
    * Aliens
* Obstacles
    * Clouds = visual obstacle
    * Planets = mobility obstacle
* Items (these will render as being a transparent overlay on the Player, with an invisible )
    * Bubble
        * Player sheild with duration
    * Chevron
        * Player speed increase with duration
    * Lighting
        * New Objects (both Alien and Stars) double value for duration
## TECH
* HTML Canvas
* CSS
* JS
    * Button binding
        * Start/Stop game 
        * Score display / deploy special
    * Player movement keybinding
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
* Having the Alien Objects enter Canvas from not only the left/top (0x/0y axis), but also the right/bottom side of the screen--couldn't figure that one out.
## SOURCES
* Canvas Crawler for dem boxes
* TicTacToe for gameState button (load game in neutral)
* TempConverter for gameScore button (display score on button, deploy special on click)
* Weston for always 'splainin dem fn's
* Karly & Sarah for Mommin' me
* TA's Lemon and Yoshi for helping me articulate logic for features that I wanted in the game.
* Anna for taking initiative to setup 1:1 TA time for me in a class where instructional staff is FAR outnumbered!❤️