class GameUI {
  constructor(uiCtx) {
    this.uiCtx = uiCtx;
    this.exclamation = new Image();
    this.exclamation.src = "../assets/sprites/exclamation.png";
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

  draw(wildCount, catchCount) {
    this.uiCtx.beginPath();
    this.uiCtx.font = 'bold 20px "Arial"';
    this.uiCtx.fillStyle = "white";
    this.uiCtx.fillText(
      `Pokemon Caught: ${catchCount}`,
      240,
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
      240,
      80
    );
    this.uiCtx.fill();
    this.uiCtx.closePath();
    ///////////

    if (catchCount >= 10) {
      this.game.player.health = 10;
      clearInterval(window.intervalId);
      // cancelAnimationFrame(request);
      // .gameOver();
    }
  }
}

export default GameUI;
