import { values } from 'lodash';

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
      }
    });
  }


}

export default Ship;
