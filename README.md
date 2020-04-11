# Gotta-Type-em-All!
[Gotta-Type-em-All live link!](https://lee-joseph-i.github.io/gotta-type-em-all/)</br>
![demogif](https://user-images.githubusercontent.com/39147326/79031105-7db80200-7b51-11ea-834d-aac3da789233.gif)

## Table of Contents
1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Future Direction](#future-direction)

## Introduction

Gotta-Type-em-All! is a Pokemon-themed typing game built from scratch with Canvas HTML5, programmed with vanilla JavaScript, and styled with CSS3. To demonstrate mastery of JavaScript and front-end development, no other major technologies or libraries were used.

## Technologies

Gotta-Type-em-All! is coded primarily in JavaScript and runs on a game loop of 60 frames per seconds using requestAnimationFrames. Multiple layers of HTML5 Canvas renders the game with all objects or classes (Pokemon sprites, UI elements). CSS is applied to position and style UI elements including the input type field.

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

## Features
* Landing Page - Rendition of Asana's own landing page. Videos and other elements can be viewed and toggled.

  ![landingvideos](https://user-images.githubusercontent.com/39147326/79030707-3fb9de80-7b4f-11ea-9eb4-be798313e923.gif)

* User Accounts - Sign up and login modals with their backend validations, with a demo login option available.

  ``` ruby
    # User model Backend
    def self.find_by_credentials(email, password)
      user = User.find_by(email: email)
      return nil unless user
      user.is_password?(password) ? user : nil
    end
    
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
  ```

  ``` javascript
    // React sign up form submission Frontend
    handleSubmit(e) {
      e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user)
        .then(this.props.closeModal)
        .then(() => this.props.history.push('/app'));
    }
  ```
  <img width="1000" alt="Sign Up modal" src="https://user-images.githubusercontent.com/39147326/78844328-4a8f3a80-79ba-11ea-9828-0f410daea9fa.png">

* Projects - Projects have creators (user creates projects), owners (users can assign projects to existing users in the database), names and descriptions. All project fields can be edited, and projects can be deleted.

  ``` javascript
    // Projects index React component
    render(){
    const { projects, updateProject, deleteProject, openModal } = this.props;
    return(
      <div className="home-body" id="home-body">
        <div className="project-list">
          {
            projects.map((project, i) => (
              <ProjectIndexItem 
                key={i}
                project={project} 
                deleteProject={deleteProject} 
                updateProject={updateProject}
                openModal={openModal}
              />
            ))
          }
    }
  ```

  ``` javascript
    // Each project is rendered as a component index item, styled with SVGs
    /* JQuery methods key into variable property ids to enable unique handlers
    (unique edit and delete dropdowns). */
  render() {
    const { project, creator } = this.props;
    return (
      <div id={`project-tile-${project.id}`} key={project.id} className="project-tile">
        <svg id={`ellipsis-${project.id}`} className="ellipsis" viewBox="0 0 32 32" tabIndex="0" focusable="false">
          <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z"></path>
        </svg>
        <div id={`project-dropdown-${project.id}`} className={`project-dropdown`}>
          <div id={`project-edit-${project.id}`} className="dropdown-item">Edit Project</div>
          <div id={`project-delete-${project.id}`} className="dropdown-item">Delete Project</div>
        </div>
        <div className="tile-card">
          <svg className="project-icon" viewBox="0 0 32 32" tabIndex="0" focusable="false">
            <path d="M 26 2 H 6 C 2.7 2 0 4.7 0 8 v 14 c 0 3.3 2.7 6 6 6 h 20 c 3.3 0 6 -2.7 6 -6 V 8 C 32 4.7 29.3 2 26 2 Z M 30 22 c 0 2.2 -1.8 4 -4 4 H 6 c -2.2 0 -4 -1.8 -4 -4 V 8 c 0 -2.2 1.8 -4 4 -4 h 20 c 2.2 0 4 1.8 4 4 V 22 Z M 26 9 c 0 0.6 -0.4 1 -1 1 H 13 c -0.6 0 -1 -0.4 -1 -1 s 0.4 -1 1 -1 h 12 C 25.6 8 26 8.4 26 9 Z M 12 15 c 0 -0.6 0.4 -1 1 -1 h 6 c 0.6 0 1 0.4 1 1 s -0.4 1 -1 1 h -6 C 12.4 16 12 15.6 12 15 Z M 24 21 c 0 0.6 -0.4 1 -1 1 H 13 c -0.6 0 -1 -0.4 -1 -1 s 0.4 -1 1 -1 h 10 C 23.6 20 24 20.4 24 21 Z M 9.2 9 c 0 0.7 -0.5 1.2 -1.2 1.2 S 6.8 9.7 6.8 9 S 7.3 7.8 8 7.8 S 9.2 8.3 9.2 9 Z M 9.2 15 c 0 0.7 -0.5 1.2 -1.2 1.2 S 6.8 15.7 6.8 15 s 0.5 -1.2 1.2 -1.2 S 9.2 14.3 9.2 15 Z M 9.2 21 c 0 0.7 -0.5 1.2 -1.2 1.2 S 6.8 21.7 6.8 21 s 0.5 -1.2 1.2 -1.2 S 9.2 20.3 9.2 21 Z"></path>
          </svg>
        </div>
        <div className="tile-name">{project.name}</div>
    }
  ```
  ![projects-index](https://user-images.githubusercontent.com/39147326/79030959-8f4cda00-7b50-11ea-8c2b-45330dba09d8.gif)

## Future Direction
* Add home screen with a Start button and How to Play elements.
* Add BGM / SFX.
* Leaderboard (backend) support, likely utilizing Google Firebase for storing user information and stats.