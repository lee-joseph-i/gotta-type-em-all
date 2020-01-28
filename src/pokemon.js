import Util from './utils';
import Game from './game';

class Pokemon {
  constructor(ctx, canvas, word, x, y, wild){
    this.ctx = ctx;
    this.canvas = canvas;
    this.word = word;
    this.x = x;
    this.y = y;
    // this.dx = 2.5;
    // this.dy = 0;
    this.shift = 0;
    this.shift2 = 0;
    this.wild = wild;

    this.pokeImg = new Image();
    this.pokeImg.src = "../assets/sprites/pikachu-sprite.png"

    this.pokeImg2 = new Image();
    this.pokeImg2.src = "../assets/sprites/pikachu-idle.png"
  }

  
  draw(){
    this.ctx.clearRect(this.x, this.y, 192, 192)
    this.ctx.drawImage(this.pokeImg, this.shift, 0, 
                        192, 192, 
                        this.x, this.y,
                        192, 192);
    this.animate();
  }

  animate(){
    if (this.shift <= 11520){
      this.shift += 192;
    } else if ( this.shift >= 11712 ){
      // this.ctx.clearRect(this.x, this.y, 192, 192);
      this.ctx.drawImage(this.pokeImg2, this.shift2, 0, 60, 60, this.x + 76, this.y + 104, 60, 60);
      this.shift2 += 60
      if (this.shift2 >= 1980){
        this.shift2 = 0;
      }
    }
    }
}

export default Pokemon;