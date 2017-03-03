class Enemy {
  constructor(stage){
    this.stage = stage;
    this.shape = new createjs.Bitmap("../images/enemy.png");
    this.shape.x = Math.floor(Math.random() * (stage.canvas.width - 5) + 5);
    this.id = Math.floor(Math.random() * (10000 - 1) + 1);
    stage.addChild(this.shape);
    this.move = this.move.bind(this);
    this.stage.addEventListener("tick", this.move);
  }

  move(){
    if(this.shape.y > this.stage.canvas.height){
      this.shape.y = 1;
    } else {
      this.shape.y += 4;
    }
  }
}

export default Enemy;
