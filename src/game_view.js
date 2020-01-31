class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.score = game.pokemonCatchCount;
    this.fps = 36;
    this.interval = 1000 / this.fps;
    this.now;
    this.then = Date.now();
    this.delta;
    this.gameOver = false;
  }

  handleInput() {
    let that = this;
    let input = document.getElementById("pokemon-input");
    input.onkeydown = function(e) {
      if (e.keyCode == 13) {
        that.game.throwTypeBall(e.currentTarget.value);
        input.value = "";
      }
    };
  }

  start() {
    this.handleInput();
    this.lastTime = 0;
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
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

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.now = Date.now();
    this.delta = this.now - this.then;
    if (this.delta > this.interval) {
      this.then = this.now - (this.delta % this.interval);
      this.game.draw(this.ctx);
    }
  }


}

export default GameView;
