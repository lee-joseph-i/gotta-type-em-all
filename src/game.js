import Pokemon from './pokemon';
import Trainer from './trainer';
import Grass from './grass';

const POSITIONS = [
  // [100, 100],
  // [100, 200],
  // [100, 300],
  // [100, 400],
  [200, 100],
  [200, 200],
  [200, 300],
  [200, 400],
  [300, 100],
  [300, 200],
  [300, 300],
  [300, 400],
  [400, 100],
  [400, 200],
  [400, 300],
  [400, 400],
  [500, 100],
  [500, 200],
  [500, 300],
  [500, 400],
  [600, 100],
  [600, 200],
  [600, 300],
  [600, 400],
];

class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.grass = [];
    this.pokemon = [];
    this.trainer = null;
    this.NUM_POKEMON = 9;
    this.BG_COLOR = "#37d437";
    this.FPS = 60;
    this.addGrass();
    this.addPokemon();
  }
  
  add(object) {
    if (object instanceof Pokemon) {
      this.pokemon.push(object);
    } else {
      throw new Error("Unable to add this object!");
    }
  }

  addGrass(){
    for (let i = 0; i < POSITIONS.length; i++) {
      this.grass.push(
        new Grass(
          this.ctx,
          this.canvas,
          POSITIONS[i],        
          )
      );
    }
  }

  addPokemon() {
    for (let i = 0; i < POSITIONS.length; i++) {
      this.pokemon.push(
        new Pokemon(
          this.ctx,
          this.canvas,
          "test word",
          POSITIONS[i][0],
          POSITIONS[i][1],
          true
        )
      );
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
      return [].concat(this.grass, this.pokemon, this.trainer);
    }
    return [].concat(this.grass, this.pokemon);
  }

  
  draw(ctx) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.allObjects().forEach(function(object) {
      object.draw(ctx);
    });
  }

  randomPosition() {
    return [Math.random() * 500, Math.random() * 500];
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
