class Ship {
  constructor(stage) {
    this.stage = stage;
    this.size = 40;
    this.shape = new createjs.Bitmap("../images/ship.png");
    stage.addChild(this.shape);
  }

}

export default Ship;
