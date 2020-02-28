import Pokemon from './pokemon';
import Trainer from './trainer';
import Grass from './grass';
import POKEDEX from './pokedex';
import GameUI from './game_ui';

const TRAINER_POSITIONS = {
  forest: [530, 140]
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
  constructor(gameCtx, uiCtx, grassCtx) {
    this.gameCtx = gameCtx;
    this.uiCtx = uiCtx;
    this.grassCtx = grassCtx;
    this.ui = this.addUi();
    this.wildCount = 0;
    this.catchCount = 0;
    this.escapeCount = 0;
    this.HP = 10;
    this.ppm;
    setTimeout(() => {
      this.ui.draw(this.catchCount, this.escapeCount);
    }, 500);
    this.grass = [];
    this.pokemon = [];
    this.addGrass();
    this.addPokemon();
    this.trainer = this.addTrainer();
  };

  addUi() {
    let ui = new GameUI(this.uiCtx);
    return ui;
  };

  throwBall(guessedName) {
    let pokemon = this.pokemon;
    let notFound = true;
    for (let i = 0; i < pokemon.length; i++) {
      let poke = pokemon[i];
      if (guessedName.toLowerCase() === poke.poke.name) {
        clearTimeout(poke.escapeTimer);
        this.removePokemon(poke);
        this.catchCount += 1;
        notFound = false;
        if(this.catchCount === 1){
          setTimeout( () => {
           this.ui.drawStatsBar(this.catchCount, this.escapeCount, this.ppm);
          }, 0);
        } else {
          this.ui.drawStatsBar(this.catchCount, this.escapeCount, this.ppm);
        };
        return true;
      };
    };
    if (notFound) {
      this.ui.missedThrow(this.trainer.pos);
    };
  };

  pokemonEscaped() {
    //pokemon escaped and lower's player's HP.
    this.HP -= 1;
    this.escapeCount += 1;
    this.ui.drawStatsBar(this.catchCount, this.escapeCount, this.ppm);
    this.ui.drawHealthBar("negative", this.HP);
    // this.ui.drawHPText(this.HP);
  };

  addGrass() {
    for (let i = 0; i < POSITIONS.length; i++) {
      this.grass.push(new Grass(this.grassCtx, POSITIONS[i]));
    };
  };

  generateSpawnPoint() {
    let randomPos = Math.floor(
      Math.random() * Math.floor(POSITIONS.length - 1)
    );
    let chosen = POSITIONS.splice(randomPos, 1);
    return chosen[0];
  };

  generatePoke() {
    let randomIdx = Math.floor(
      Math.random() * Math.floor(availablePoke.length)
    );
    let pos = this.generateSpawnPoint();
    let pokeid = availablePoke.splice(randomIdx, 1)[0];
    let poke = new Pokemon(this.gameCtx, this, POKEDEX[pokeid], pos);
    return poke;
  };

  addPokemon() {
    let allPositions = POSITIONS.length;
    let timer = Math.floor(Math.random() * 2500) + 100;
    let spawnPoke = setTimeout(() => {
      if (POSITIONS.length > 0) {
        let poke = this.generatePoke();
        this.pokemon.push(poke);
        this.wildCount += 1;
      };
      this.addPokemon();
    }, timer);
  };

  removePokemon(poke) {
    let pokeName = poke.poke.name;
    for (let i = 0; i < this.pokemon.length; i++) {
      if (this.pokemon[i].poke.name === pokeName) {
        this.pokemon.splice(i, 1);
        break;
      };
    };
    this.wildCount -= 1;
    POSITIONS.push([poke.pos[0], poke.pos[1]]);
    availablePoke.push(poke.poke.id);
  };

  addTrainer() {
    let trainer = new Trainer(this.gameCtx, TRAINER_POSITIONS["forest"]);
    return trainer;
  };
};

export default Game;
