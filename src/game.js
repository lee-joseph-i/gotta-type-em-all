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
      this,
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
    let timer = Math.floor(Math.random() * 0) + 2000;
    let spawnPoke = setTimeout(() => {
      if (POSITIONS.length > 0) {
        let poke = this.generatePoke();
        this.pokemon.push(poke);
        this.escape(poke);
        this.pokemonWildCount += 1;
      }
      this.addPokemon();
    }, timer);
  }

  throwTypeBall(typeBall) {
    for (let i = 0; i < this.pokemon.length; i++) {
      let poke = this.pokemon[i];
      if (typeBall.toLowerCase() === poke.poke.name) {
        this.removePokemon(poke);
        this.pokemonCatchCount += 1;
        break;
      }
    }
  }

  escape(poke) {
    // console.log(`before timeout: ${poke.poke.name}`)
    setTimeout(() => {
          // console.log(`after timeout: ${poke.poke.name}`);
      // if(this.removePokemon(poke)){

      // }
      this.removePokemon(poke);
      this.pokemonEscapeCount += 1;
      // penalty logic goes here
    }, poke.poke.escapeTimer);
  }

  // removePokemon(poke) {
  //   console.log("START")
  //   console.log("the poke argument")
  //   console.log(poke)
  //   console.log(`pokemon in argument: ${poke.poke.name}`)
  //   console.log(`the array:`)
  //   console.log(this.pokemon)
  //   let pokeIndex = this.pokemon.indexOf(poke);
  //   console.log(`the index of the pokemon: ${pokeIndex}`)
  //   console.log("END")
  //   this.pokemon.splice(pokeIndex, 1);
  //   this.pokemonWildCount -= 1;
  //   POSITIONS.push([poke.x, poke.y]);
  //   availablePoke.push(poke.poke.id);
  //   return true;
  // }
  removePokemon(poke) {
    let pokeName = poke.poke.name;
    let pokeIndex;
    for(let i = 0; i < this.pokemon.length; i++){
      console.log(this.pokemon[i].poke.name);
      console.log(pokeName)
      if(this.pokemon[i].poke.name === pokeName){
        pokeIndex = i;
        break;
      };
    };
        // console.log(`the index of the pokemon: ${pokeIndex}`);

    this.pokemon.splice(pokeIndex, 1);
    this.pokemonWildCount -= 1;
    POSITIONS.push([poke.x, poke.y]);
    availablePoke.push(poke.poke.id);
    return true;
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
    this.ctx.font = 'bold 20px "Arial"';
    this.ctx.fillText(`Pokemon Caught: ${this.pokemonCatchCount}`, this.canvas.width - 240, 50);
    this.ctx.fillText(`Pokemon Escaped: ${this.pokemonEscapeCount}`, this.canvas.width - 240, 80);
    this.ctx.fill();
    this.ctx.closePath();
  
  }
};

export default Game;
