class Enemy {
  constructor(stage, id){
    this.stage = stage;
    this.shape = new createjs.Bitmap("https://naelkhann.github.io/Descent/images/enemy.png");
    this.shape.x = Math.floor(Math.random() * (410 - 5) + 5);
    this.id = id;
    this.shape.setBounds(this.shape.x, this.shape.y, 40, 40);
    stage.addChild(this.shape);
    this.offScreen = false;
    this.move = this.move.bind(this);
    this.stage.addEventListener("tick", this.move);
  }


  move(){
    if(this.shape.y > this.stage.canvas.height){
      this.shape.y = 0;
    } else {
      this.shape.y += 4;
    }
  }

}

export default Enemy;
