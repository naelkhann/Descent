import Ship from './ship';
import Bullet from './bullet';
import Enemy from './enemy';
import * as Util from './util';
import { values } from 'lodash';

class Game {
  constructor(){
    this.stage = new createjs.Stage('myCanvas');
    window.stage = this.stage;
    this.enemies = {};
    window.enemies = this.enemies;

    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", () => {
      this.stage.update();
    });

    this.generateEnemies = this.generateEnemies.bind(this);
    this.stage.addEventListener("tick", this.generateEnemies);
    this.enemiesObjs = values(this.enemies);
    window.enemiesObjs = this.enemiesObjs;

    this.ship = new Ship(this.stage, this.enemies);
    window.ship = this.ship;

    this.stage.on("stagemousemove", (e) => {
      this.ship.shape.y = e.stageY - 20;
      this.ship.shape.x = e.stageX - 20;
    });

    this.bulletInterval;
    this.bullets = {};
    window.bullets = this.bullets;

    this.ship.shape.on("mousedown", (e) => {
      this.bulletInterval = setInterval(() => {
        let bullet = new Bullet(this.stage, this.ship, (this.ship.shape.x + 20), this.ship.shape.y, this.enemies, Util.generateId());
        this.bullets[bullet.id] = bullet;
      }, 150);
    });

    this.ship.shape.on("pressup", (e) => {
      clearInterval(this.bulletInterval);
    });

  }

  generateEnemies(){
    if(Object.keys(this.enemies).length < 1){
      for(let i = 0; i < 5; i ++){
        let enemy = new Enemy(stage, Util.generateId());
        this.enemies[enemy.id] = enemy;
      }
    }
  }


}

export default Game;
