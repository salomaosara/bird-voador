const ground = {
    color:"brown",
    width: 320,
    height: 90,
    draw(){
        eCtx.fillStyle = this.color;
        eCtx.fillRect(0,450,this.width,this.height)
    }
}