class Enemy {
  constructor(stage, id){
    this.stage = stage;
    this.shape = new createjs.Bitmap("./assets/images/enemy.png");
    this.shape.x = Math.floor(Math.random() * (410 - 5) + 5);
    this.id = id;
    this.shape.setBounds(this.shape.x, this.shape.y, 40, 40);
    stage.addChild(this.shape);
    this.offScreen = false;
    this.move = this.move.bind(this);
    this.stage.addEventListener("tick", this.move);
  }

  generateRandomX(){
    let num = Math.floor(Math.random() * (410 - 5) + 5);
    let coinFlip = Math.floor(Math.random() * 2);
    if (coinFlip == 1){
      return num + Math.floor(Math.random() * 20)
    } else {
      return num - Math.floor(Math.random() * 20)
    }
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
