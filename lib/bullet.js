class Bullet {
  constructor(stage, ship, pos_x, pos_y, id) {
    this.stage = stage;
    this.ship = ship;
    this.shape = new createjs.Shape();
    this.shape.graphics.f('white').dc(pos_x, pos_y, 4);
    this.id = id;
    this.stage.addChild(this.shape);
    this.move = this.move.bind(this);
    this.stage.addEventListener("tick", this.move);
  }

  move(e){
    if(this.shape.y < -Math.abs(this.stage.canvas.height)){
      this.stage.removeChild(this.shape);
    }
    this.shape.y -= 10;
  }

  checkCollisions(obj){
    if (this.shape.x >= obj.x + obj._bounds.width
    || this.shape.x + this.shape._bounds.width <= obj.x
    || this.shape.y >= obj.y + obj._bounds.height
    || this.shape.y + this.shape._bounds.height <= obj.y){
      console.log("hit");
      return false;
    }
    return true;
  }

}

export default Bullet;
