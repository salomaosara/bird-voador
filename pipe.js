const pipeSpeed = 0.5; // valor padrão, 1 pixel por frame

class Pipe{
    imageFilePipeUp="./img/pipeup_1.jpg";
    imageFilePipeDown="./img/pipedown_1.jpg";
    imagePipeUp;
    imagePipeDown;
    constructor(x,y,h){
    this.imagePipeUp = new Image();
    this.imagePipeUp.src = this.imageFilePipeUp;
    this.imagePipeDown = new Image();
    this.imagePipeDown.src = this.imageFilePipeDown;
    this.x = x;
    this.y = y;
    this.h = h;
    this.passed = false; // Inicializa aqui
}

    draw(){
        //eCtx.drawImage(this.imagePipeUp, this.x, this.y); 
        eCtx.drawImage(this.imagePipeUp,  0,300-this.y,26,this.y    ,this.x,50   ,26,this.y); 
        eCtx.drawImage(this.imagePipeDown,0,0         ,26,this.h-(this.y+80) ,this.x,this.y+80+50,26,this.h-(this.y+80)); 
        if (gameState === "playing") {
    this.x -= pipeSpeed;
}

        if (this.x < 0){
         this.x = 294; 
         this.y = Math.round(50 + Math.random()*260);  
         this.passed = false; // reseta pontuação para o novo cano
}

    }    
}
