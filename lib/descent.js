import Ship from './ship';
import Bullet from './bullet';
import Enemy from './enemy';
import * as Util from './util';
import { values } from 'lodash';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  new Game();
});
