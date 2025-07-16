const eCanvas = document.querySelector("canvas");
const eCtx = eCanvas.getContext("2d");

function setup() {
    eCanvas.width = 320;  // pode ajustar para fixo, para não quebrar a posição dos pipes
    eCanvas.height = 480; // 50 + 400 + 30 (scoreboard + sky + ground)
}
setup();
