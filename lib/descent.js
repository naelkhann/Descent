import Ship from './ship';
import Bullet from './bullet';

document.addEventListener('DOMContentLoaded', () => {
  var stage = new createjs.Stage('myCanvas');
  var ship = new Ship(stage, "red");
  stage.addChild(ship.shape);
  stage.update();
  createjs.Ticker.setInterval(40);
  createjs.Ticker.addEventListener("tick", () => {
    stage.update();
  });

  stage.on("stagemousemove", (e) => {
    ship.shape.y = e.stageY - 20;
    ship.shape.x = e.stageX - 20;
  });

  let bulletInterval;

  ship.shape.on("mousedown", (e) => {
    bulletInterval = setInterval(() => {
      let bullet = new Bullet(stage, ship, (ship.shape.x + 20), ship.shape.y);
    }, 150);
  });

  ship.shape.on("pressup", (e) => {
    clearInterval(bulletInterval);
  });

});
