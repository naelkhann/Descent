import Ship from './ship';
import Bullet from './bullet';
import Enemy from './enemy';
import * as Util from './util';
import { values } from 'lodash';

document.addEventListener('DOMContentLoaded', () => {
  let stage = new createjs.Stage('myCanvas');
  window.stage = stage;
  let ship = new Ship(stage);
  let enemies = {};
  for(let i = 0; i < 5; i ++){
    let enemy = new Enemy(stage, Util.generateId());
    enemies[enemy.id] = enemy;
  }
  
  window.enemies = enemies;
  window.enemiesObjs = values(enemies);

  createjs.Ticker.setFPS(50);
  createjs.Ticker.addEventListener("tick", () => {
    stage.update();
  });

  stage.on("stagemousemove", (e) => {
    ship.shape.y = e.stageY - 20;
    ship.shape.x = e.stageX - 20;
  });

  let bulletInterval;
  let bullets = {};

  ship.shape.on("mousedown", (e) => {
    bulletInterval = setInterval(() => {
      let bullet = new Bullet(stage, ship, (ship.shape.x + 20), ship.shape.y, enemiesObjs, Util.generateId());
      bullets[bullet.id] = bullet;
    }, 150);
  });

  ship.shape.on("pressup", (e) => {
    clearInterval(bulletInterval);
  });

  window.bullets = bullets;

});
