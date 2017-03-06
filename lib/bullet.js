import { values } from 'lodash';

class Bullet {
  constructor(stage, ship, pos_x, pos_y, enemies, id) {
    this.stage = stage;
    this.ship = ship;
    this.enemies = enemies;
    this.shape = new createjs.Shape();
    this.shape.graphics.f('white').dr(pos_x, pos_y, 4, 4);
    this.id = id;
    this.stage.addChild(this.shape);
    this.move = this.move.bind(this);
    this.stage.addEventListener("tick", this.move);
    this.checkCollisions = this.checkCollisions.bind(this);
    this.stage.addEventListener("tick", this.checkCollisions);
  }

  move(e){
    if(this.shape.y < 0){
      this.stage.removeChild(this.shape);
    }
    this.shape.graphics.command.y -= 10;
  }

  checkCollisions(e) {
    let obj = values(this.enemies);
    let x = this.shape.graphics.command.x;
    let y = this.shape.graphics.command.y;
    let bullet_bounds = 5;
    obj.forEach(obj => {
      if (obj.shape.y > 100){
        if (x < obj.shape.x + obj.shape._bounds.width && x + bullet_bounds > obj.shape.x && y < obj.shape.y + obj.shape._bounds.height && y + bullet_bounds > obj.shape.y){
          this.stage.removeChild(obj.shape, this.shape);
          delete enemies[obj.id];
        }
      }
    });
  }


}

export default Bullet;
