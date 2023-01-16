export default class Ship{
    constructor(){

        this.img = document.querySelector("#ship");
        this.x = 900;
        this.y = 640;
        this.speed = 10;
        
    }

    // set y(value){
    //     this.y = value;
    // }
    // get y(){
    //     return this.y;
    // }

    draw(ctx){
        ctx.drawImage(this.img, 
            this.x,this.y,
            200,100);

    }
    update(){ 

    }

}