import GameView from './game_view';
import Game from './game';

window.addEventListener('DOMContentLoaded', () => {
  
  // game canvas
  const gameCanvas = document.getElementById("game-canvas");
  const gameCtx = gameCanvas.getContext("2d");
  gameCanvas.height = 700;
  gameCanvas.width = 900;

  const game = new Game(gameCtx, gameCanvas, gameCanvas.height, gameCanvas.width);
  new GameView(game, gameCtx).start();


  //menu canvas
    const menuCanvas = document.getElementById("menu-canvas");
    const menuCtx = menuCanvas.getContext("2d");
    menuCanvas.height = 700;
    menuCanvas.width = 900;

})

//challenges (add a README later):
//animating and connecting multiple spritesheets 
//organizing spritesheets
//refactoring setinterval to requestAnimationFrame
// freaken stopping the escape timeout for individual pokemon. this would cause some serious bugs if the user "catches" and clears the pokemon before the settimout occurs.


// use ctx.save(), ctx.clip(), ctx.restore() for spotlight effect.