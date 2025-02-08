const eCanvas = document.querySelector("canvas");
const eCtx = eCanvas.getContext("2d");

function setup(){
    eCanvas.width = eCtx.width = screen.width;
    eCanvas.height = eCtx.height = screen.height;
}
setup();

