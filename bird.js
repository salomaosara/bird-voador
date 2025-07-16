class Bird{
    x= 100;
    y= 100;
    size= 22;
    velocity=0.5;
    gravity=0.120;
    flapVelocity=4;
    life=1;
    #image;
    imageFile="./img/bird.png";
    flapSoundFile="./wav/flap.MP3";
    dieSoundFile='./wav/die.MP3';
    hitSoundFile='./wav/hit.MP3';
    scoreSoundFile = "./wav/score.MP3";  
    scoreSound;
    flapSound;
    dieSound;
    hitSound;
    frames=0;
    constructor(){
        this.#image = new Image();
        this.#image.src = this.imageFile;
        this.flapSound = new Audio();
        this.flapSound.src = this.flapSoundFile;
        this.dieSound = new Audio();
        this.dieSound.src = this.dieSoundFile;
        this.hitSound = new Audio();
        this.hitSound.src = this.hitSoundFile;
        this.scoreSound = new Audio();
        this.scoreSound.src = this.scoreSoundFile;
    }
    draw(){
        //eCtx.drawImage(this.#image, this.x, this.y,this.size,this.size); 
        let i = Math.round(this.frames/5);
        eCtx.drawImage(this.#image,180*i,0,140,145,this.x,this.y,this.size,this.size);      
        if (gameState === "playing") {
    this.y += this.velocity;
    this.velocity += this.gravity;
    }

    
        this.frames++;
        if (this.frames == 40) 
            this.frames = 0     
    }
    flap(){
        this.velocity=-3;
        this.flapSound.play();
    }
    die(){
        this.life--;
        this.dieSound.play();
    }
    hit(){
        this.life--;
        this.hitSound.play();
    }
}
