export default class Menubackground{
    constructor(){

        this.img = document.querySelector("#menu");
        this.x = 0;
        this.y = 0;

    }
    draw(ctx){
        ctx.drawImage(this.img,this.x,this.y,1000,702);
    }
   
}