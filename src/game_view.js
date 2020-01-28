class GameView{
  constructor(game, ctx){
    this.ctx = ctx;
    this.game = game;

    this.fps = 36;
    this.now;
    this.then = Date.now();
    this.interval = 1000 / this.fps;
    this.delta;
  };
  
  start(){
    this.lastTime = 0;
    // start the animation
    requestAnimationFrame(this.animate.bind(this));

  };

  // animate(time){
  //   const timeDelta = time - this.lastTime;

  //   // this.game.step(timeDelta); //move pokemon, doesn't work yet
  //   this.game.draw(this.ctx);
  //   this.lastTime = time;

  //   // every call to animate requests causes another call to animate
  //   requestAnimationFrame(this.animate.bind(this));

  //   // setInterval( () => {
  //   //     this.game.draw(this.ctx);
  //   //     this.lastTime = time;
  //   // }, 1000 / 40)
  // }
  
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
