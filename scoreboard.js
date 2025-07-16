const scoreboard = {
    color:"#514222",
    colorText:"white",
    width: 320,
    height: 50,
    name:"Bird Voador",
    draw(score = 0, highScore = 0) {
    eCtx.fillStyle = this.color;
    eCtx.fillRect(0, 0, this.width, this.height);

    eCtx.fillStyle = this.colorText;
    eCtx.textBaseline = "middle";

    // Nome do jogo à esquerda
    eCtx.textAlign = "left";
    eCtx.font = "14px Fantasy";
    eCtx.fillText(this.name, 10, 25);

    // Mensagem central
    eCtx.textAlign = "center";
    eCtx.font = "16px Fantasy";

    if (gameState === "start") {
        eCtx.fillText("Clique para começar", this.width / 2, 25);
    } else if (gameState === "gameover") {
        eCtx.fillStyle = "white";
        eCtx.fillText("Perdeu!", this.width / 2, 25);
    } else {
        // Durante o jogo
        eCtx.fillStyle = this.colorText;
        eCtx.font = "20px Fantasy";
        eCtx.fillText("Score: " + score, this.width / 2, 25);

        eCtx.textAlign = "right";
        eCtx.fillText("Recorde: " + highScore, this.width - 10, 25);
    }
}
}