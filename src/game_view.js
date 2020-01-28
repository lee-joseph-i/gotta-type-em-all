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
      // update time stuffs
      // Just `then = now` is not enough.
      // Lets say we set fps at 10 which means
      // each frame must take 100ms
      // Now frame executes in 16ms (60fps) so
      // the loop iterates 7 times (16*7 = 112ms) until
      // this.delta > interval === true
      // Eventually this lowers down the FPS as
      // 112*10 = 1120ms (NOT 1000ms).
      // So we have to get rid of that extra 12ms
      // by subtracting this.delta (112) % interval (100).
      // Hope that makes sense.
        
      this.then = this.now - (this.delta % this.interval);
        
      // ... Code for animateing the Frame ...
          this.game.draw(this.ctx);
      }
  }
 
}

export default GameView;
