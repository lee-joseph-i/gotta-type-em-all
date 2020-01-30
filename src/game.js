import Pokemon from './pokemon';
import Trainer from './trainer';
import Grass from './grass';
import POKEDEX from './pokedex';

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

// const availablePoke = [0,1,2,3,4,5,6,7,8,9,10,11,12];
// const availablePoke = [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const availablePoke = Object.keys(POKEDEX);

class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.grass = [];
    this.pokemon = [];
    this.pokemonWildCount = 0;
    this.pokemonCatchCount = 0;
    this.pokemonEscapeCount = 0;
    this.trainer = null;
    this.BG_COLOR = "#37d437";
    this.FPS = 60;
    this.timer = null;
    this.addGrass();
    this.addPokemon();
  }

  addGrass() {
    for (let i = 0; i < POSITIONS.length; i++) {
      this.grass.push(new Grass(this.ctx, this.canvas, POSITIONS[i], false));
    }
  }

  generateSpawnPoint() {
    let randomPos = Math.floor(
      Math.random() * Math.floor(POSITIONS.length - 1)
    );
    let chosen = POSITIONS.splice(randomPos, 1);
    return chosen[0];
  }

  generatePoke() {
    let randomIdx = Math.floor(
      Math.random() * Math.floor(availablePoke.length - 1)
    );
    let pos = this.generateSpawnPoint();
    let pokeid = availablePoke.splice(randomIdx, 1)[0];
    let poke = new Pokemon(
      this.ctx,
      this.canvas,
      POKEDEX[pokeid],
      pos[0],
      pos[1]
    );
    return poke;
  }
  // generatePoke(){
  //   let randomIdx = Math.floor(Math.random() * Math.floor(Object.values(POKEDEX).length));
  //   let pos = this.generateSpawnPoint();
  //   console.log(randomIdx);
  //   console.log(`${Object.values(POKEDEX).length}`)
  //   let poke = new Pokemon(
  //     this.ctx,
  //     this.canvas,
  //     POKEDEX[randomIdx],
  //     pos[0],
  //     pos[1]
  //   );
  //   delete POKEDEX[randomIdx];
  //   return poke;
  // };

  addPokemon() {
    let allPositions = POSITIONS.length;
    let timer = Math.floor(Math.random() * 5000) + 100;
    console.log(timer)
    let spawnPoke = setTimeout(() => {
      if (availablePoke.length > 0) {
        let poke = this.generatePoke();
        this.pokemon.push(poke);
        this.escape(poke);
        this.pokemonWildCount += 1;
        this.addPokemon();
      }
    }, timer);
  }

  throwTypeBall(typeBall) {
    for (let i = 0; i < this.pokemon.length; i++) {
      let poke = this.pokemon[i];
      if (typeBall.toLowerCase() === poke.poke.name) {
        this.removePokemon(poke);
        this.pokemonCatchCount += 1;
        clearTimeout(this.timer);
        break;
      }
    }
  }

  escape(poke) {
    this.timer = setTimeout(() => {
      this.removePokemon(poke);
      this.pokemonEscapeCount += 1;
      // penalty logic goes here
    }, poke.poke.escapeTimer);
  }

  removePokemon(poke) {
    let pokeIndex = this.pokemon.indexOf(poke);
    this.pokemon.splice(pokeIndex, 1);
    this.pokemonWildCount -= 1;
    POSITIONS.push([poke.x, poke.y]);
    availablePoke.push(poke.poke.id);
  }
  // removePokemon(poke) {
  //   let pokeIndex = this.pokemon.indexOf(poke);
  //   this.pokemon.splice(pokeIndex, 1);
  //   this.pokemonWildCount -= 1;
  //   POSITIONS.push([poke.x, poke.y]);
  //   POKEDEX[poke.poke.id] = poke;
  // }

  // addTrainer(){
  //   const trainer = new Trainer({
  //     pos: this.randomPosition(),
  //     game: this
  //   });
  //   this.add(trainer);
  //   return trainer;
  // }

  allObjects() {
    if (this.trainer !== null) {
      return [].concat(this.grass, this.pokemon, this.trainer);
    }
    return [].concat(this.grass, this.pokemon);
  }

  draw(ctx) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.allObjects().forEach(function(object) {
      object.draw(ctx);
    });
    
    //below can be wrapped into a "draw score" function. 
    //research draw efficiency
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.font = 'bold 22px "Arial"';
    this.ctx.fillText(`Pokemon Caught: ${this.pokemonCatchCount}`, this.canvas.width - 240, 50);
    this.ctx.fillText(`Pokemon Escaped: ${this.pokemonEscapeCount}`, this.canvas.width - 240, 80);
    this.ctx.fill();
    this.ctx.closePath();
  
  }
};

export default Game;
