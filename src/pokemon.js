import Util from './utils';
import Game from './game';
import POKEDEX from './pokedex';

class Pokemon {
  constructor(gameCtx, game, id, pos){
    this.gameCtx = gameCtx;
    this.game = game;
    this.poke = id;
    this.pos = [pos[0], pos[1]];
    this.shift = 0;
    this.shift2 = 0;
    // this.startEscapeTimer();
    this.pokeImg = new Image();
    this.pokeImg.src = this.poke.src

    this.pokeImg2 = new Image();
    this.pokeImg2.src = this.poke.src2

    this.escapeTimer = null;
    this.startEscapeTimer();
  }
  
  draw(){
    // this.gameCtx.clearRect(this.pos[0] - this.poke.adjustX + 20, this.pos[1] - this.poke.adjustY, this.poke.shift1, this.poke.shift1)
    this.gameCtx.drawImage(this.pokeImg, this.shift, 0, 
                        this.poke.shift1, this.poke.shift1, 
                        this.pos[0] - this.poke.adjustX + 20, this.pos[1] - this.poke.adjustY,
                        this.poke.shift1, this.poke.shift1);
    this.animate();
  }

  animate(){
    if (this.shift <= this.poke.srcSpriteLength){
      this.shift += 192;
    } else if ( this.shift >= this.poke.srcSpriteLength ){
      // this.gameCtx.clearRect(this.x, this.y, 192, 192);
      this.gameCtx.drawImage(this.pokeImg2, this.shift2, 0, this.poke.shift2_x, this.poke.shift2_y, this.pos[0] + 20 + this.poke.adjustX_2, this.pos[1] + this.poke.adjustY_2, this.poke.shift2_x, this.poke.shift2_y);
      this.shift2 += this.poke.shift2_x;
      if (this.shift2 >= this.poke.srcSpriteLength2){
        this.shift2 = 0;
      }
    }
  }

  startEscapeTimer(){
    // console.log('test')
    this.escapeTimer = setTimeout( () => {
      // console.log(this)
      // console.log(this.poke.name)
      this.game.removePokemon(this);
      this.game.EscapeCount += 1;
      this.game.pokemonEscaped();
    }, this.poke.escapeTimer);
  }
}

export default Pokemon;