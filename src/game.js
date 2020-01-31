import Pokemon from './pokemon';
import Trainer from './trainer';
import Grass from './grass';
import POKEDEX from './pokedex';

const TRAINER_POSITIONS = {
  forest: [520, 130],
};

const POSITIONS = [
  // [200, 250],
  [210, 320],
  [170, 420],
  [120, 520],
  // [300, 250],
  [330, 330],
  [280, 420],
  [230, 520],
  // [400, 250],
  [440, 320],
  [390, 420],
  [340, 520],
  // [500, 250],
  [550, 320],
  [500, 420],
  [450, 520],
  // [600, 250],
  [660, 320],
  [610, 420],
  [560, 520],
];

const availablePoke = Object.keys(POKEDEX);

class Game {
  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.grass = [];
    this.pokemon = [];
    this.trainer = [];
    this.pokemonWildCount = 0;
    this.pokemonCatchCount = 0;
    this.pokemonEscapeCount = 0;
    this.BG_COLOR = "#37d437";
    this.FPS = 60;
    this.addGrass();
    this.addPokemon();
    this.addTrainer();
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

  addPokemon() {
    let allPositions = POSITIONS.length;
    let timer = Math.floor(Math.random() * 0) + 1000;
    let spawnPoke = setTimeout(() => {
      if (POSITIONS.length > 0) {
        let poke = this.generatePoke();
        this.pokemon.push(poke);
        // this.escape(poke);
        this.pokemonWildCount += 1;
      }
      this.addPokemon();
    }, timer);
  }

  throwTypeBall(typeBall) {
    for (let i = 0; i < this.pokemon.length; i++) {
      let poke = this.pokemon[i];
      if (typeBall.toLowerCase() === poke.poke.name) {
        clearTimeout(poke.escapeTimer);
        this.removePokemon(poke);
        this.pokemonCatchCount += 1;
        break;
      }
    }
  }

  removePokemon(poke) {
    let pokeName = poke.poke.name;
    for(let i = 0; i < this.pokemon.length; i++){
      console.log(poke.poke.name)
      console.log(this.pokemon[i].poke.name)
      if(this.pokemon[i].poke.name === pokeName){
        this.pokemon.splice(i, 1);
        break;
      };
    };
    this.pokemonWildCount -= 1;
    POSITIONS.push([poke.x, poke.y]);
    availablePoke.push(poke.poke.id);
    return true;
  }

  addTrainer(){
    let trainer = new Trainer(
      this.ctx,
      this.canvas,
      TRAINER_POSITIONS["forest"],
    );
    console.log(trainer)
    this.trainer.push(trainer);
    return trainer;
  }

  allObjects() {
    if (this.trainer !== null) {
      return [].concat(this.grass, this.pokemon, this.trainer);
    }
    return [].concat(this.grass, this.pokemon);
  }

  draw(ctx) {
    this.trainer[0].cycle++
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.allObjects().forEach(function(object) {
      object.draw(ctx);
    });
    
    //below can be wrapped into a "draw score" function. 
    //research draw efficiency
    this.ctx.beginPath();
    this.ctx.font = 'bold 20px "Arial"';
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Pokemon Caught: ${this.pokemonCatchCount}`, this.canvas.width - 240, 50);
    if (this.pokemonEscapeCount < 7){
      this.ctx.fillStyle = "white";
    } else if (this.pokemonEscapeCount > 5 && this.pokemonEscapeCount < 9) {
      this.ctx.fillStyle = "yellow";
    } else {
      this.ctx.fillStyle = "red";
    }
    this.ctx.fillText(`Pokemon Escaped: ${this.pokemonEscapeCount}`, this.canvas.width - 240, 80);
    this.ctx.fill();
    this.ctx.closePath();
    ///////////

    if (this.pokemonCatchCount >= 10) {
      this.player.health = 10;
      clearInterval(window.intervalId);
      // cancelAnimationFrame(request);
      // .gameOver();
    }


  }
};

export default Game;
