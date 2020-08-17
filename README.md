# Gotta Type 'em All!
[Live link!](https://lee-joseph-i.github.io/gotta-type-em-all/)</br>
![demogif](https://user-images.githubusercontent.com/39147326/79031105-7db80200-7b51-11ea-834d-aac3da789233.gif)

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies and Features](#technologies-and-features)
3. [Future Direction](#future-direction)

## Introduction

Gotta Type 'em All! is a Pokemon-themed typing game built from scratch with Canvas HTML5, programmed with vanilla JavaScript, and styled with CSS3. To demonstrate mastery of JavaScript and front-end development, no other major technologies or libraries were used.

## Technologies and Features

Gotta Type 'em All! is coded primarily in JavaScript and runs on a game loop of 60 frames per seconds using requestAnimationFrames. Multiple layers of HTML5 Canvas renders the game with all objects or classes (Pokemon sprites, UI elements). CSS is applied to position and style UI elements including the input type field.

* JS for game logic
* Separate HTML5 Canvas layers for rendering and clearing sprites and UI elements for optimal performance.
* game_view.js - handles game loop
  ```javascript
    animateGame() {
      requestAnimationFrame(this.animateGame.bind(this));
      this.input.addEventListener("input", this.startTimer);
      this.gameNow = Date.now();
      this.gameDelta = this.gameNow - this.gameThen;
      let that = this;
      if(!this.game.gameOver){
        if (that.gameDelta > that.gameInterval) {
          that.gameThen = that.gameNow - (that.gameDelta % that.gameInterval);
          that.gameCtx.clearRect(20, 100, 810, 550);
          that.game.trainer.cycle++;
          that.game.trainer.draw();
          that.game.grass.forEach(grass => {
            grass.draw();
          });
          that.game.pokemon.forEach(poke => {
            poke.draw();
          });
        }
        if (that.game.catchCount > 0) {
          that.game.ppm = (
            that.game.catchCount /
            (that.inputTimer / 60)
            ).toFixed(0);
        } else {
          that.game.ppm = 0;
        };
        that.game.ui.drawPPM(that.game.ppm);
      }
    };
  ```
* game.js - handles game logic (health, catching pokemon)
  ```javascript
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
  ```
* pokedex.js - handles Pokemon properties (sprites, timers, indices)

  ```javascript
    const POKEDEX = {
      0: {
        id: 0,
        name: "pikachu",
        src: "./assets/sprites/pikachu-open.png",
        src2: "./assets/sprites/pikachu-idle.png",
        shift1: 192,
        shift2_x: 60,
        shift2_y: 60,
        adjustX: 76,
        adjustX_2: 0,
        adjustY: 104,
        adjustY_2: 0,
        srcSpriteLength: 11520,
        srcSpriteLength2: 1980,
        escapeTimer: 6500,
        shiny: false
      }
    }
  ```
![In-game screenshot](https://i.ibb.co/pxKk4xd/screenshot.png)

## Future Direction
* Add home screen with a Start button and How to Play elements.
* Add BGM / SFX.
* Leaderboard (backend) support, likely utilizing Google Firebase for storing user information and stats.