# Descent
A top-down space shooter game built in Javascript w/ Easel JS &amp; more. Descent is a 2D vertical scrolling action game in which you use a spaceship to take out enemy aliens in your way. Inspired by Space Invaders. Try to get a high score by taking out enemy ships!

![Descent Menu](https://github.com/naelkhann/Descent/raw/master/assets/images/descent_menu.gif)

## Architecture and Technologies
Descent is built with JavaScript and a few popular JavaScript libraries :
- jQuery : To manipulate DOM elements for menus and starting a new game instance.
- Easel JS : To help manipulate HTML Canvas elements, like sprites, shape objects, and game texts
- Typed JS : A library that provides an interface to create typewriter style text rendering. Used for menus and game over text.
- Webpack : Using webpack's powerful asset bundler processes, allowing classes to work concurrently and not have to use Require JS.

## Classes
`game.js`: Handles the background and visualize the actual scrolling. Handles bullet generation, enemy generation, score count, and many of the games core features.
`spaceship.js`: Handles ship sprite construction, collision detection, and bullet generation.
`bullet.js` : Handles bullet object construction and collision detection.
`enemy.js`: Handles enemy movement and sprite construction.


## Implementation
### Consistent FPS
Descent uses the EaselJS library, and in doing so, has access to the powerful `tick` event handler. This event handler allows any EaselJS stage updates to happen at a consistent frame per second - allowing for smooth and consistent gameplay at 60FPS.

This is implemented by adding any methods that update the stage to the `tick` event listener as a callback:

```javascript
//SCORE UPDATE
this.stage.addEventListener("tick", this.scoreUpdate);
//GAMEOVER ADD EVENTS
this.stage.addEventListener("tick", this.gameOver);
//ENEMIES
this.stage.addEventListener("tick", this.generateEnemies);
```

### Bullet Generation
Similar to retro plane shooters from the 90s, Descent revolves around the idea that your ship shoots bullets on mouse down and continues shooting until the mouse button is released. Descent uses an interval to determine a limited bullet generation. On mouse up, the interval is then cleared:

```javascript
this.ship.shape.on("mousedown", (e) => {
  this.bulletInterval = setInterval(() => {
    let bullet = new Bullet(this.stage,
      this.ship,
      (this.ship.shape.x + 20),
      this.ship.shape.y,
      this.enemies,
      Util.generateId(),
      window.score);
    this.bullets[bullet.id] = bullet;
  }, 150);
});

this.ship.shape.on("pressup", (e) => {
  clearInterval(this.bulletInterval);
});
```

![Descent Gameplay](https://github.com/naelkhann/Descent/raw/master/assets/images/descent_play.gif)

### Enemy Generation
Enemies are generated on a Game instance via the `generateEnemies()` method:

```javascript
generateEnemies(){
  if(Object.keys(this.enemies).length < 1){
    for(let i = 0; i < 5; i ++){
      let enemy = new Enemy(stage, Util.generateId());
      this.enemies[enemy.id] = enemy;
    }
  }
}
```

This creates Enemy objects after all enemies have been cleared from the Canvas. Enemies are generated at random X positions:

```javascript
generateRandomX(){
  let num = Math.floor(Math.random() * (410 - 5) + 5);
  let coinFlip = Math.floor(Math.random() * 2);
  if (coinFlip == 1){
    return num + Math.floor(Math.random() * 20)
  } else {
    return num - Math.floor(Math.random() * 20)
  }
}
```


## Future Updates
Descent is still under development.

**Currently In Progress** : Enemy position generation in specific grids
- Music/Sound Effects
- Boss Fight
