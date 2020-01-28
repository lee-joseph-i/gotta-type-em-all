import Pokemon from './pokemon';
import Trainer from './trainer';



class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.cavas = canvas;
    this.pokemon = [];
    this.trainer = null;
    this.NUM_POKEMON = 1;
    this.BG_COLOR = "#37d437";
    this.FPS = 60;
    this.addPokemon();
  }
  
  add(object) {
    if (object instanceof Pokemon) {
      this.pokemon.push(object);
    } else {
      throw new Error("Unable to add this object!");
    }
  }

  addPokemon() {
    for (let i = 0; i < this.NUM_POKEMON; i++) {
      this.pokemon.push(new Pokemon(this.ctx, this.canvas, "test word", this.randomPosition()[0], this.randomPosition()[1], true));
    }
  }

  // addTrainer(){
  //   const trainer = new Trainer({
  //     pos: this.randomPosition(),
  //     game: this
  //   });
  //   this.add(trainer);
  //   return trainer;
  // }

  moveObject() {
    for (let i = 0; i < this.pokemon.length; i++) {
      this.pokemon[i].move();
    }
  }

  step(delta) {
    this.moveObject(delta);
  }

  removePokemon() {
    this.pokemon.splice(j, 1);
  }

  allObjects() {
    if(this.trainer !== null){
      return [].concat(this.pokemon, this.trainer);
    }
    return this.pokemon;
  }

  
  draw(ctx) {
    this.allObjects().forEach(function(object) {
      object.draw(ctx);
    });
  }

  randomPosition() {
    return [Math.random() * 700, Math.random() * 700];
  }

  remove(){
    if (object instanceof Pokemon) {
      this.pokemon.splice(this.pokemon.indexOf(object), 1);
    } else if (object instanceof Trainer) {
      this.trainer.splice(this.trainer.indexOf(object), 1);
    } else {
      throw new Error("unknown type of object");
    }
  };
};

export default Game;
