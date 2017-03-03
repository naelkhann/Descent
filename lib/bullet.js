class Bullet {
  constructor(stage, ship, pos_x, pos_y) {
    this.stage = stage;
    this.ship = ship;
    this.shape = new createjs.Shape();
    this.shape.graphics.f('white').dc(pos_x, pos_y, 4);
    this.stage.addChild(this.shape);
    this.move = this.move.bind(this);
    this.stage.addEventListener("tick", this.move);

  }

  move(e){
    this.shape.y -= 20;
  }

}

export default Bullet;
