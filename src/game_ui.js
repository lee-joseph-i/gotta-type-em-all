class GameUI {
  constructor(uiCtx) {
    this.uiCtx = uiCtx;
    this.exclamation = new Image();
    this.exclamation.src = "../assets/sprites/exclamation.png";
    this.healthBar = new Image();
    this.healthBar.src = "../assets/sprites/hpfinal.png";
    this.healthBarPos = [600, 20];
    this.healthBarDim = [569, 215];
    this.healthPos = [699.5, 68.5];
    this.healthDim = [113.2, 5.5];
    this.health = 113.2;
    this.healthNet = 113.2 / 10;
    this.healthBar.onload = () => {
      this.drawHealthBar(null, 10);
    };
    this.statsBar = new Image();
    this.statsBar.src = "../assets/sprites/statsbar.png";
    this.statsBarPos = [30, 16];
    this.statsBarDim = [400, 200];
    this.statsBar.onload = () => {
      this.drawStatsBar(0, 0);
    };
  };

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

  drawHealthBar(net, HP){
    console.log(HP)
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
    this.drawHPText(HP);
  };

  drawHPText(HP){
    this.uiCtx.font = 'bold 28px "VT323"';
    this.uiCtx.fillStyle = "rgb(72, 72, 72)";
    if(HP >= 10){
      this.uiCtx.fillText(
        `${HP}/10`,
        this.healthPos[0] + 59,
        this.healthPos[1] - 13
      );
    } else {
      this.uiCtx.fillText(
        `${HP}/10`,
        this.healthPos[0] + 70,
        this.healthPos[1] - 13
      );
    } 
  }

  drawStatsBar(catchCount, escapeCount){
    let x = this.statsBarPos[0];
    let y = this.statsBarPos[1];
    let width = this.statsBarDim[0];
    let height = this.statsBarDim[1];
    this.uiCtx.clearRect(x, y, width, height);
    this.uiCtx.drawImage(
    this.statsBar, 0, 0, width, height, x, y, width, height);
    this.uiCtx.beginPath();
    this.uiCtx.font = 'bold 30px "VT323"';
    this.uiCtx.fillStyle = "rgb(72, 72, 72)";
    this.uiCtx.fillText(`Caught: ${catchCount}`, x + 70, y + 47);
    this.uiCtx.fillText(`Escaped: ${escapeCount}`, x + 70, y + 77);
    this.uiCtx.fillText(`PPM: ${escapeCount}`, x + 70, y + 107);
    this.uiCtx.fill();
    this.uiCtx.closePath();

  }

  draw(catchCount, escapeCount) {
    // this.uiCtx.clearRect(100, 0, 500, 500);
    // this.uiCtx.beginPath();
    // this.uiCtx.font = 'bold 35px "VT323"';
    // this.uiCtx.fillStyle = "white";
    // this.uiCtx.fillText(
    //   `Caught: ${catchCount}`,
    //   100,
    //   50
    // );
    // this.uiCtx.fillText(
    //   `Escaped: ${escapeCount}`,
    //   100,
    //   80
    // );
    // this.uiCtx.fill();
    // this.uiCtx.closePath();


    // if (catchCount >= 10) {
    //   this.game.player.health = 10;
    //   clearInterval(window.intervalId);
    //   // cancelAnimationFrame(request);
    //   // .gameOver();
    // }
  }
}

export default GameUI;
