import Ship from './ship';
import Bullet from './bullet';
import Enemy from './enemy';
import * as Util from './util';
import { values } from 'lodash';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const start_button = document.getElementById("start-screen-new-game");
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  $("#start-screen-new-game").on("click", (e) => {
    $("#start-screen").remove();
    $("#start-screen-buttons").remove();
    $("#start-screen-instructions").remove();
    $("#myCanvas").css({display: "block"});
    new Game();
  });


});
