import Ship from './ship';
import Bullet from './bullet';
import Enemy from './enemy';
import * as Util from './util';
import { values } from 'lodash';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const start_button = document.getElementById("start-screen-new-game");
  start_button.addEventListener("click", () => {
    $("#start-screen").css({display: "none"});
    $("#start-screen-buttons").css({display: "none"});
    $("#myCanvas").css({display: "block"});
    new Game();
  });
});
