# Descent
A top-down space shooter game built in Javascript w/ Easel JS &amp; more. Descent is a 2D vertical scrolling action game in which you use a spaceship to take out enemy aliens in your way. The game has three levels - the last with an ending boss fight - and the ability to pickup powerups that give timed boosts to your arsenal of lasers and rockets. Inspired by Raptor: Call of the Shadows.

##Functionality & MVPs
- [ ] Have a menu screen to start the game, pause music, and show directions
- [ ] Start out initial scrolling with a lower velocity to help beginners learn
- [ ] Key controls to move player spaceship (W, A, S, D or Arrow Keys)
- [ ] Generate max five enemies on screen that shoot in a pre-determined pattern
- [ ] Detect shot collisions, player spaceship collisions.
- [ ] Finish level screen

In addition, I hope to get to :
- [ ] Boss level, bigger enemy with multiple patterned shots
- [ ] Powerup pickup to change player spaceship shooting behavior

##Wireframes
The app will consist of a single center positioned Canvas with a undetermined height/width. The view will be in portrait, so the height will be much greater than the width. There will be links on the bottom to my personal content (LinkedIn, GitHub, etc.)

![Wireframe of Descent](https://github.com/naelkhann/Descent/blob/master/Untitled%20Diagram.png "Descent")

##Architecture and Technologies
The project will be done with :
- Javascript
- jQuery
- Easel JS, to manipulate the canvas and have library methods to create game focused on features
- Webpack will bundle all javascripts into one bundle file to serve

`board.js`: Will handle the background and visualize the actual scrolling. Initial level will be desert themed. The board will handle collision detection.
`spaceship.js`: Will handle the ship movement and shot pellet generation
`enemy.js`: Will handle enemy automated movement and shot pellet generation.


##Implementation Timeline
**Day 1**: Setup directory with proper dependencies using NPM. Get successful webpack of dependencies and generate small objects to test. Review Easel JS documentation and guides to generate Canvas board of desired size. Render `Spaceship` object. Temporary image on `Board` to get vertical scrolling. Focus to handle `Spaceship` movement with arrow or W,A,S,D key inputs by end of day.

**Day 2**: Render `Spaceship` shot pellets and generate small block to test collision detection. Ensure collision detection works before moving on to render `Enemy` object. Render `Enemy` shot pellets and automate pattern. Create automated (time-based) `Enemy` generator.

**Day 3**: Implement level end conditions to win/lose level. Implement menu to start or game, read directions on how to play. Learn to implement custom music on page. Style `Board` more fittingly and clean (desert theme). Begin work on bonus features.
