class Ship {
  constructor(stage, color) {
    this.stage = stage;
    this.size = 40;
    this.pos_x = stage.canvas.width/2 - this.size ;
    this.pos_y = stage.canvas.height - (this.size * 2);
    this.shape = new createjs.Shape();
    this.shape.graphics.f(color).dr(0,0, this.size, this.size);
  }

  render(){
    return (this.shape);
  }
}

export default Ship;
