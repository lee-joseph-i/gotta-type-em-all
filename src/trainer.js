import Util from "./utils";
import Game from "./game";

class Trainer {
  constructor(ctx, canvas, pos) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.shift = 0;
    this.shifter = 200;
    this.pos = [pos[0], pos[1]];
    this.cycle = 0;
    this.TrainerImg = new Image();
    this.TrainerImg.src = "../assets/sprites/trainer.png";
  }

  draw() {
    // this.ctx.clearRect(this.x, this.y, this.poke.shift1, this.poke.shift1)
    this.ctx.drawImage(
      this.TrainerImg,
      this.shift,
      0,
      200,
      200,
      this.pos[0],
      this.pos[1],
      140,
      140
    );
    if(this.cycle % 4 === 0 && this.cycle < 17){
      this.animate();
    } 
    if(this.cycle >16){
      setTimeout( () => {
        this.cycle = 0;
      }, 650);
    };
  }

  animate(){
    this.shift += this.shifter;
    if(this.shift >= 800 || this.shift <= 0){
      this.shifter *= -1;
    };
  };
};

export default Trainer;
