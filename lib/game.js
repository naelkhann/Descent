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
    this.flashStartText = this.flashStartText.bind(this)
    this.flashStartText();

    setTimeout(() => {
      createjs.Ticker.setFPS(60);
      createjs.Ticker.addEventListener("tick", () => {
        this.stage.update();
      });

      this.generateEnemies = this.generateEnemies.bind(this);
      this.gameOver = this.gameOver.bind(this);
      this.stage.addEventListener("tick", this.gameOver);
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

    }, 1500)

  }

  generateEnemies(){
    if(Object.keys(this.enemies).length < 1){
      for(let i = 0; i < 5; i ++){
        let enemy = new Enemy(stage, Util.generateId());
        this.enemies[enemy.id] = enemy;
      }
    }
  }

  flashStartText(){
    const startText = new createjs.Text("Go Get 'Em", "35px VT323", "#eca350");
    startText.x = 150;
    startText.y = 300;
    this.stage.addChild(startText);
    this.stage.update();
    setTimeout(() => {
      this.stage.removeChild(startText);
      this.stage.update();
    }, 1000);
  }

  gameOver(){
    if(this.ship.gameover){
      this.stage.removeEventListener("tick", this.gameOver);
      $("#myCanvas").remove();
      this.gameOverDOMElements();
    }
  }

  gameOverDOMElements(){
    const texts = ["You lost to the aliens, pilot. Pick yourself up.", "Pilot?! Are you there?! PILOT!?", "We had more faith in you pilot...Send in the next one, commander."]
    let randomText = texts[Math.floor(Math.random() * texts.length)]
    const gameOverText = $("<p/>").html(randomText)
    const gameOverDiv = $("<div/>").attr("id", "start-screen-instructions")
      .append(gameOverText);
    const gameOverButton = $("<button/>").attr("id", "start-screen-new-game").html("Retry").click(() => window.location.reload(true))
    $("body").append(gameOverDiv).append(gameOverButton);
  }

}

export default Game;
