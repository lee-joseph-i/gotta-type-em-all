class GameUI {
  constructor(uiCtx) {
    this.uiCtx = uiCtx;
    this.exclamation = new Image();
    this.exclamation.src = "../assets/sprites/exclamation.png";
    this.healthBar = new Image();
    this.healthBar.src = "../assets/sprites/hp_edit.png";
    this.healthBarPos = [600, 20];
    this.healthBarDim = [569, 215];
    this.healthPos = [699.5, 59.5];
    this.healthDim = [113.2, 5.5];
    this.health = 113.2;
    this.healthNet = 113.2 / 10;
    this.healthBar.onload = () => {
      this.drawHealthBar();
    }
  }

  missedThrow(pos){
    this.uiCtx.drawImage(
      this.exclamation,
      0,
      0,
      131,
      132,
      pos[0] + 90,
      pos[1] - 25,
      131 / 2.6,
      132 / 2.6
    );
    setTimeout( () => {
      this.uiCtx.clearRect(pos[0] + 90, pos[1] - 25, 131, 132)
    }, 600);
  }

  drawHealthBar(net){
    this.uiCtx.clearRect(
      this.healthBarPos[0],
      this.healthBarPos[1],
      this.healthBarDim[0],
      this.healthBarDim[1],
    );
    this.uiCtx.drawImage(
      this.healthBar,
      0,
      0,
      this.healthBarDim[0],
      this.healthBarDim[1],
      this.healthBarPos[0],
      this.healthBarPos[1],
      this.healthBarDim[0] / 2,
      this.healthBarDim[1] / 2,
    ); 

    if(this.health >= this.healthNet * 8){
      this.uiCtx.fillStyle = "rgb(35, 223, 57)";
    } else if(this.health >= this.healthNet * 4){
      this.uiCtx.fillStyle = "rgb(255, 253.7, 24)";
    } else if(this.health >= this.healthNet * 0){
      this.uiCtx.fillStyle = "rgb(224, 98, 43)";
    }
    if(net === 'negative'){
          this.health -= this.healthNet;
          this.uiCtx.fillRect(
            this.healthPos[0],
            this.healthPos[1],
            this.health,
            this.healthDim[1],
            5.5
          );
    } else if (net === 'positive'){
          this.health += this.healthNet;
          this.uiCtx.fillRect(
            this.healthPos[0],
            this.healthPos[1],
            this.health,
            this.healthDim[1],
            5.5
          );
    } else {
      this.uiCtx.fillRect(this.healthPos[0], this.healthPos[1], this.health, this.healthDim[1], 5.5);
    };
    this.drawHPText();
  };

  drawHPText(){
    this.uiCtx.font = 'bold 22px "VT323"';
    this.uiCtx.fillStyle = "rgb(72, 72, 72)";
    this.uiCtx.fillText(
      "10/10",
      this.healthPos[0] + 73,
      this.healthPos[1] - 10
    );
  }

  draw(catchCount, escapeCount) {
    this.uiCtx.clearRect(100, 0, 500, 500);
    this.uiCtx.beginPath();
    this.uiCtx.font = 'bold 35px "VT323"';
    console.log(this.uiCtx.font)
    this.uiCtx.fillStyle = "white";
    this.uiCtx.fillText(
      `Pokemon Caught: ${catchCount}`,
      100,
      50
    );
    // if (escapeCount < 7) {
    //   this.uiCtx.fillStyle = "white";
    // } else if (escapeCount > 5 && escapeCount < 9) {
    //   this.uiCtx.fillStyle = "yellow";
    // } else {
    //   this.uiCtx.fillStyle = "red";
    // }
    this.uiCtx.fillText(
      `Pokemon Escaped: ${escapeCount}`,
      100,
      80
    );
    this.uiCtx.fill();
    this.uiCtx.closePath();


    // if (catchCount >= 10) {
    //   this.game.player.health = 10;
    //   clearInterval(window.intervalId);
    //   // cancelAnimationFrame(request);
    //   // .gameOver();
    // }
  }
}

export default GameUI;
