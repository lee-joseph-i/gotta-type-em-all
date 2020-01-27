const GameView = require('./game_view.js');

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Loaded.');
  console.log('Webpack is good.')
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  console.log(ctx);
  // const gameView = new gameView(ctx);
  // gameView.start();
})