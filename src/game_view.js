import Game from './game';
import GameUI from './game_ui';

class GameView {
  constructor(gameCtx, uiCtx, grassCtx, input) {
    this.gameCtx = gameCtx;
    this.uiCtx = uiCtx;
    this.grassCtx = grassCtx;
    this.gameFps = 36;
    this.gameInterval = 1000 / this.gameFps;
    this.gameNow;
    this.gameThen = Date.now();
    this.gameDelta;
    this.game = new Game(this.gameCtx, this.uiCtx, this.grassCtx);
    this.input = input;
    this.startTimer = this.startTimer.bind(this);
    this.inputTimer = 0;
    this.typeStart = 0;
    this.typeEnd = 0;
    this.gameOver = false;

    // this.game.ui.draw(this.wildCount, this.catchCount);
  }

  handleInput() {
    let that = this;
    // let input = document.getElementById("pokemon-input");
    this.input.onkeydown = function(e) {
      if (e.keyCode == 13) {
        let caught = that.game.throwBall(e.currentTarget.value);
        that.input.value = "";
        if (caught){
          if (that.typeStart > 0) {
            that.typeEnd = Date.now();
            that.inputTimer += (that.typeEnd - that.typeStart) / 1000;
          }
          that.typeStart = 0;
        }
      }
    };
  }

  start() {
    this.handleInput();
    requestAnimationFrame(this.animateGame.bind(this));
  }

  gameOver() {
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
    this.input.addEventListener("input", this.startTimer);
    this.gameNow = Date.now();
    this.gameDelta = this.gameNow - this.gameThen;
    if (this.gameDelta > this.gameInterval) {
      this.gameThen = this.gameNow - (this.gameDelta % this.gameInterval);
      this.gameCtx.clearRect(20, 100, 810, 550);
      this.game.trainer.cycle++;
      this.game.trainer.draw();
      this.game.grass.forEach(grass => {
        grass.draw();
      });
      this.game.pokemon.forEach(poke => {
        poke.draw();
      });
    }
    if (this.game.catchCount > 0) {
      this.game.ppm = (
        this.game.catchCount /
        (this.inputTimer / 60)
        ).toFixed(0);
    } else {
      this.game.ppm = 0;
    };
    this.game.ui.drawPPM(this.game.ppm);
  };

  startTimer(e) {
    if (this.typeStart === 0 && e.target.value != " ") {
      this.typeStart = Date.now();
    };
  };
};

export default GameView;
