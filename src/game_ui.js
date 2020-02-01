class GameUI {
  constructor(uiCtx) {
    this.uiCtx = uiCtx;
    this.exclamation = new Image();
    this.exclamation.src = "../assets/sprites/exclamation.png";
    this.healthBar = new Image();
    this.healthBar.src = "../assets/sprites/hp_edit.png";
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

  drawHealthBar(){
    this.uiCtx.drawImage(
      this.healthBar,
      0,
      0,
      569,
      215,
      600,
      20,
      569 / 2,
      215 / 2
    ); 
    this.uiCtx.fillStyle = "rgb(35, 223, 57)"
    this.uiCtx.fillRect(699.5, 59.5, 113.2, 5.5);
  }

  updateHealth(){

  }

  draw(wildCount, catchCount) {
    this.uiCtx.beginPath();
    this.uiCtx.font = 'bold 20px "Arial"';
    this.uiCtx.fillStyle = "white";
    this.uiCtx.fillText(
      `Pokemon Caught: ${catchCount}`,
      100,
      50
    );
    if (wildCount < 7) {
      this.uiCtx.fillStyle = "white";
    } else if (wildCount > 5 && wildCount < 9) {
      this.uiCtx.fillStyle = "yellow";
    } else {
      this.uiCtx.fillStyle = "red";
    }
    this.uiCtx.fillText(
      `Pokemon Escaped: ${wildCount}`,
      100,
      80
    );
    this.uiCtx.fill();
    this.uiCtx.closePath();

    setTimeout(() => {
      this.drawHealthBar();
    }, 50); //JANKY!!!

    // if (catchCount >= 10) {
    //   this.game.player.health = 10;
    //   clearInterval(window.intervalId);
    //   // cancelAnimationFrame(request);
    //   // .gameOver();
    // }
  }
}

export default GameUI;
