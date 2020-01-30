import Util from './utils';
import Game from './game';
import POKEDEX from './pokedex';

class Pokemon {
  constructor(ctx, canvas, id, x, y){
    this.ctx = ctx;
    this.canvas = canvas;
    this.poke = id;
    this.x = x;
    this.y = y;
    // this.dx = 2.5;
    // this.dy = 0;
    this.shift = 0;
    this.shift2 = 0;
    this.startEscapeTimer();
    this.pokeImg = new Image();
    this.pokeImg.src = this.poke.src

    this.pokeImg2 = new Image();
    this.pokeImg2.src = this.poke.src2
  }
  
  draw(){
    // this.ctx.clearRect(this.x, this.y, this.poke.shift1, this.poke.shift1)
    this.ctx.drawImage(this.pokeImg, this.shift, 0, 
                        this.poke.shift1, this.poke.shift1, 
                        this.x - this.poke.adjustX + 20, this.y - this.poke.adjustY,
                        this.poke.shift1, this.poke.shift1);
    this.animate();
  }

  animate(){
    let that = this;
    if (this.shift <= this.poke.srcSpriteLength){
      this.shift += 192;
    } else if ( this.shift >= this.poke.srcSpriteLength ){
      // this.ctx.clearRect(this.x, this.y, 192, 192);
      this.ctx.drawImage(this.pokeImg2, this.shift2, 0, this.poke.shift2_x, this.poke.shift2_y, that.x + 20 + this.poke.adjustX_2, that.y + this.poke.adjustY_2, this.poke.shift2_x, this.poke.shift2_y);
      this.shift2 += this.poke.shift2_x;
      if (this.shift2 >= this.poke.srcSpriteLength2){
        this.shift2 = 0;
      }
    }
  }

  startEscapeTimer(){
    setTimeout( () => {
      
    }, this.poke.escapeTimer);
  }
}

export default Pokemon;