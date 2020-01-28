import GameView from './game_view';
import Game from './game';

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Loaded.');
  console.log('Webpack is good.')
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  canvas.height = 700;
  canvas.width = 700;
  const game = new Game(canvas.height, canvas.width);
  new GameView(game, ctx).start();
})