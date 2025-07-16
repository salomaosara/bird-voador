let score = 0;
let highScore = Number(localStorage.getItem("flappyHighScore") || 0);

let gameState = "start"; // start, playing, gameover
let startSound = new Audio("./wav/start.MP3");

let bird = new Bird();

// Array de pipes (2 pipes simultâneos)
const pipeSpacing = 150;
const pipeStartX = 294;
let pipes = [];

for (let i = 0; i < 2; i++) {
    let x = pipeStartX + i * pipeSpacing;
    let y = Math.round(50 + Math.random() * 260);
    pipes.push(new Pipe(x, y, scoreboard.height + sky.height + ground.height));
}




// Função para atualizar a lógica do jogo
function updateGameLogic() {
    pipes.forEach(pipe => {
        // Movimento do pipe (reduz a posição X)
        if (gameState === "playing") {
            pipe.x--;
        }

        // Reposiciona o pipe quando sair da tela
        if (pipe.x + 26 < 0) {
    const farthestX = Math.max(...pipes.map(p => p.x));
    pipe.x = farthestX + pipeSpacing;
    pipe.y = Math.round(50 + Math.random() * 260);
    pipe.passed = false;
}

        // Incrementa pontuação ao passar pelo pipe
        if (!pipe.passed && pipe.x + 26 < bird.x) {
            score++;
            pipe.passed = true;
            bird.scoreSound.play();

            if (score > highScore) {
                highScore = score;
                localStorage.setItem("flappyHighScore", highScore);
            }
        }

        // Detecta colisão
        if (Math.abs(bird.x - pipe.x) < bird.size) {
            if ((bird.y < pipe.y + 50) || (bird.y > pipe.y + 110)) {
                bird.hit();
                gameState = "gameover";
            }
        }
    });

    // Verifica se o pássaro saiu da tela (topo ou chão)
    if (
    bird.y + bird.size >= scoreboard.height + sky.height || // encostou no chão
    bird.y <= scoreboard.height // encostou no teto
) {
    bird.die();
    gameState = "gameover";
}

}

// Função para desenhar os elementos do jogo
function drawGame() {
    scoreboard.draw(score, highScore);
    sky.draw();
    bird.draw();
    pipes.forEach(pipe => pipe.draw());
    ground.draw();
}

// Função principal do jogo
function play() {
    if (gameState === "playing") {
        updateGameLogic();

        if (bird.life <= 0) {
            gameState = "gameover"; // muda o estado antes de desenhar
        }
    }

    drawGame();
    requestAnimationFrame(play);
}

// Evento de clique para controlar o jogo
document.addEventListener('click', () => {
    if (gameState === "start") {
    gameState = "playing";
    startSound.play();
    score = 0;
    bird.life = 1;
    bird.y = 100;
    bird.velocity = 0.5;

    // ✅ Em vez de mudar posições, só reseta o `passed`
    pipes.forEach(pipe => {
        pipe.passed = false;
    });
    
    } else if (gameState === "playing") {
        bird.flap();
    } else if (gameState === "gameover") {
        gameState = "start";
        score = 0;
        bird.life = 1;
        bird.y = 100;
        bird.velocity = 0.5;
        pipes.forEach((pipe, i) => {
            pipe.x = 294 + i * 150;
            pipe.y = Math.round(50 + Math.random() * 260);
            pipe.passed = false;
        });
    }
});

play();
