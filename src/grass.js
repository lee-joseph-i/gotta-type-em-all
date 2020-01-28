import Util from "./utils";
import Game from "./game";


class Grass {
  constructor(ctx, canvas, pos) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.pos = [pos[0], pos[1]];

    this.grassImg = new Image();
    this.grassImg.src = "../assets/sprites/tall-grass-adjusted.png";
  }

  draw() {
    // this.ctx.clearRect(this.x, this.y, this.poke.shift1, this.poke.shift1)
    console.log("test!")
    this.ctx.drawImage(
      this.grassImg,
      0,
      0,
      90,
      67,
      this.pos[0],
      this.pos[1],
      90,
      67
    );
  }
}

export default Grass;
