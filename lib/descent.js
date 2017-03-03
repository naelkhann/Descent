import Ship from './ship';
import Bullet from './bullet';
import Enemy from './enemy';

document.addEventListener('DOMContentLoaded', () => {
  let stage = new createjs.Stage('myCanvas');
  let ship = new Ship(stage);
  let enemies = {};
  for(let i = 0; i < 5; i ++){
    let enemy = new Enemy(stage);
    enemies[enemy.id] = enemy;
  }

  let bullets = {};
  stage.update();
  createjs.Ticker.setFPS(50);
  createjs.Ticker.addEventListener("tick", () => {
    stage.update();
  });

  stage.on("stagemousemove", (e) => {
    ship.shape.y = e.stageY - 20;
    ship.shape.x = e.stageX - 20;
  });

  let bulletInterval;

  ship.shape.on("mousedown", (e) => {
    bulletInterval = setInterval(() => {
      let bullet = new Bullet(stage, ship, (ship.shape.x + 20), ship.shape.y);
    }, 150);
  });

  ship.shape.on("pressup", (e) => {
    clearInterval(bulletInterval);
  });

});
