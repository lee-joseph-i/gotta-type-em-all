import GameView from './game_view';
import Game from './game';

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Loaded.');
  console.log('Webpack is good.')
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  canvas.height = 700;
  canvas.width = 900;


    let img = new Image();

    img.src = "../assets/sprites/tall-grass-adjusted.png";
    img.onload = function() {
      // create pattern
      var ptrn = ctx.createPattern(img, "repeat"); // Create a pattern with this image, and set it to "repeat".
      ctx.fillStyle = ptrn;
      ctx.fillRect(0, 0, canvas.width, canvas.height - 100); // context.fillRect(x, y, width, height);
    };


  const game = new Game(ctx, canvas, canvas.height, canvas.width);
  new GameView(game, ctx).start();
})

//challenges (add a README later):
//animating and connecting multiple spritesheets 
//organizing spritesheets
//refactoring setinterval to requestAnimationFrame