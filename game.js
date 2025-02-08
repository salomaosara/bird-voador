function play(){
    scoreboard.draw();
    sky.draw();
    ground.draw();
    bird.draw();
    pipe.draw();
    if (bird.life > 0)
        requestAnimationFrame(play);
    if (bird.y > (scoreboard.height+sky.height-bird.size))
        bird.die();
    if (Math.abs(bird.x-pipe.x) < bird.size)
        if ((bird.y < pipe.y+50) || (bird.y > pipe.y+110)){
            bird.hit();
            console.log('Bird X:' + bird.x+ ' Bird Y:' + bird.y);
            console.log('Pipe X:' + pipe.x+ ' Pipe Y:' + pipe.y);
        }
            
}
let bird = new Bird();
let pipe = new Pipe(294,50+200,400)
document.addEventListener('click', (e) => { bird.flap()})
play();

