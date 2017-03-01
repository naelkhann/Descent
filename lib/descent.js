document.addEventListener('DOMContentLoaded', () => {
  var stage = new createjs.Stage('myCanvas');
  var ship = new createjs.Shape();
  var circle = new createjs.Shape();

  ship.graphics.beginFill('red').drawRect(0, 0, 40, 40);
  circle.graphics.f('blue').dc(40, 40, 10);
  stage.addChild(ship, circle);
  stage.update();
})
