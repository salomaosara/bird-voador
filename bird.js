class Bird{
    x= 100;
    y= 100;
    size= 25;
    velocity=0.5;
    gravity=0.2;
    flapVelocity=5;
    life=1;
    #image;
    imageFile="./img/bird.png";
    flapSoundFile="./wav/flap.wav";
    dieSoundFile='./wav/die.wav';
    hitSoundFile='./wav/hit.wav';
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
    }
    draw(){
        //eCtx.drawImage(this.#image, this.x, this.y,this.size,this.size); 
        let i = Math.round(this.frames/5);
        eCtx.drawImage(this.#image,180*i,0,140,145,this.x,this.y,this.size,this.size);      
        this.y+=this.velocity;
        this.velocity+=this.gravity;
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
