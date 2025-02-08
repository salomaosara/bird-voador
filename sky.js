const sky = {
    color:"cyan",
    width: 320,
    height: 400,
    draw(){
        eCtx.fillStyle = this.color;
        eCtx.fillRect(0,50,this.width,this.height)
    }
}