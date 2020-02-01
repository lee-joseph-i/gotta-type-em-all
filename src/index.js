import GameView from './game_view';

window.addEventListener('DOMContentLoaded', () => {
  
  // game canvas
  const gameCanvas = document.getElementById("game-canvas");
  const gameCtx = gameCanvas.getContext("2d");
  gameCanvas.height = 700;
  gameCanvas.width = 900;
  
  //ui canvas
  const uiCanvas = document.getElementById("game-ui-canvas");
  const uiCtx = uiCanvas.getContext("2d");
  uiCanvas.height = 700;
  uiCanvas.width = 900;

        const grassCanvas = document.getElementById("grass-canvas");
        const grassCtx = grassCanvas.getContext("2d");
        grassCanvas.height = 700;
        grassCanvas.width = 900;
  
  // //initialize game
  // const game = new Game(gameCtx, gameCanvas);
  // const gameUI = new GameUI(uiCtx, uiCanvas, game)
  // new GameView(game, gameUI, gameCtx, uiCtx).start();
  
  //menu canvas
  const menuCanvas = document.getElementById("menu-canvas");
  const menuCtx = menuCanvas.getContext("2d");
  menuCanvas.height = 700;
  menuCanvas.width = 900;
  
  new GameView(gameCtx, uiCtx, grassCtx).start();
})

//challenges (add a README later):
//animating and connecting multiple spritesheets 
//organizing spritesheets
//refactoring setinterval to requestAnimationFrame
// freaken stopping the escape timeout for individual pokemon. this would cause some serious bugs if the user "catches" and clears the pokemon before the settimout occurs.


// use ctx.save(), ctx.clip(), ctx.restore() for spotlight effect.