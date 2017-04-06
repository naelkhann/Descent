import { values } from 'lodash';
import Game from './game';

class Ship {
  constructor(stage, enemies) {
    this.stage = stage;
    this.size = 40;
    this.shape = new createjs.Bitmap("./assets/images/ship.png");
    this.shape.x = 225;
    this.shape.y = 640;
    stage.addChild(this.shape);
    this.enemies = enemies;
    this.checkCollisions = this.checkCollisions.bind(this);
    this.stage.addEventListener("tick", this.checkCollisions);
    this.gameover = false;
  }

  checkCollisions(e) {
    let obj = values(this.enemies);
    let x = this.shape.x;
    let y = this.shape.y;
    let ship_bounds = 40;
    obj.forEach(obj => {
      if ((obj.constructor.name === "Enemy") &&
          (x < obj.shape.x + obj.shape._bounds.width
          && x + ship_bounds > obj.shape.x
          && y < obj.shape.y + obj.shape._bounds.height
          && y + ship_bounds > obj.shape.y)){
            this.stage.removeAllChildren();
            this.gameover = true;
      }
    });
  }


}

export default Ship;
