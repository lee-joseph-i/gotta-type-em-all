import Game from './game';
import GameUI from './game_ui';

class GameView {
  constructor(gameCtx, uiCtx, grassCtx) {
    this.gameCtx = gameCtx;
    this.uiCtx = uiCtx;
    this.grassCtx = grassCtx;
    this.gameFps = 36;
    this.gameInterval = 1000 / this.gameFps;
    this.gameNow;
    this.gameThen = Date.now();
    this.gameDelta;

    this.game = new Game(
      this.gameCtx,
      this.uiCtx,
      this.grassCtx
    );
    this.gameOver = false;

    // this.game.ui.draw(this.wildCount, this.catchCount);
  }

  handleInput() {
    let that = this;
    let input = document.getElementById("pokemon-input");
    input.onkeydown = function(e) {
      if (e.keyCode == 13) {
        that.game.throwBall(e.currentTarget.value);
        input.value = "";
      }
    };
  }

  start() {
    this.handleInput();
    requestAnimationFrame(this.animateGame.bind(this));
  }

  gameOver(){
    if (this.player.health <= 0) {
      this.player.health = 0;
      this.player.drawHealth();
      clearInterval(window.intervalId);
      cancelAnimationFrame(request);
      this.gameOver();
    }
  }

  animateGame() {
 
    requestAnimationFrame(this.animateGame.bind(this));
    this.gameNow = Date.now();
    this.gameDelta = this.gameNow - this.gameThen;
    if (this.gameDelta > this.gameInterval) {
      this.gameThen = this.gameNow - (this.gameDelta % this.gameInterval);
      this.gameCtx.clearRect(
        20, 100, 810, 550
      );
      this.game.trainer.cycle++
      this.game.trainer.draw();
      this.game.grass.forEach( grass => {
        grass.draw();
      });
      this.game.pokemon.forEach( poke => {
        poke.draw();
      });
    }
  }
}

export default GameView;
