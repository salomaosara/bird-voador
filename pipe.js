class Pipe{
    imageFilePipeUp="./img/pipeup_1.png";
    imageFilePipeDown="./img/pipedown_1.png";
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
    }
    draw(){
        //eCtx.drawImage(this.imagePipeUp, this.x, this.y); 
        eCtx.drawImage(this.imagePipeUp,  0,300-this.y,26,this.y    ,this.x,50   ,26,this.y); 
        eCtx.drawImage(this.imagePipeDown,0,0         ,26,this.h-(this.y+80) ,this.x,this.y+80+50,26,this.h-(this.y+80)); 
        this.x--;        
        if (this.x < 0){
            this.x = 294; 
            this.y = Math.round(50 + Math.random()*260);  
        }
    }    
}
