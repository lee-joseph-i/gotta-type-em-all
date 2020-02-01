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
    this.catchCount = 0;
    this.wildCount = 0;
    this.escapeCount = 0; 
    this.gameOver = false;

    this.throwBall = this.throwBall.bind(this); //this seems useless, why didn't it work for handleInput?
  }

  handleInput() {
    let that = this;
    let input = document.getElementById("pokemon-input");
    input.onkeydown = function(e) {
      if (e.keyCode == 13) {
        that.throwBall(e.currentTarget.value);
        input.value = "";
      }
    };
  }

  throwBall(guessedName){
    let pokemon = this.game.pokemon;
    for (let i = 0; i < pokemon.length; i++) {
      let poke = pokemon[i];
      let notFound = true;
      if (guessedName.toLowerCase() === poke.poke.name) {
        clearTimeout(poke.escapeTimer);
        this.game.removePokemon(poke);
        this.pokemonCatchCount += 1;
        notFound = false;
        break;
      }
        this.game.ui.missedThrow(this.game.trainer.pos)
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
      this.game.ui.draw();
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
