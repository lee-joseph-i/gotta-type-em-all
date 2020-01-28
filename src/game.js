// import Pokemon from ('./pokemon');
// import Trainer from ('./trainer');

class Game {
  constructor() {
    this.pokemon = [];
    this.trainer = null;
    this.addPokemon();
    this.DIM_X = 1000;
    this.DIM_Y = 1000;
    this.NUM_POKEMON = 0;
    this.BG_COLOR = "#37d437";
    this.FPS = 60;
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
      this.pokemon.push(new Pokemon(this.randomPosition(), this));
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
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.fillStyle = this.BG_COLOR;
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
    this.allObjects().forEach(function(object) {
      object.draw(ctx);
    });
  }

  randomPosition() {
    return {
      pos: [Math.random() * this.DIM_X, Math.random() * this.DIM_Y]
    };
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
