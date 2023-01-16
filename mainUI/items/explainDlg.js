export default class ExplainDlg{

    constructor(){
        this.img = document.querySelector("#dialogue");
        this.isVisible = false;
        this.x = 250;
        this.y = 250;
        this.width = 600;
        this.height = 300;

    }
    show() {
        this.isVisible = true;
    }
    draw(ctx) {
        if (!this.isVisible) return;
        ctx.drawImage(this.img, this.x,this.y, this.width, this.height );

        ctx.fillStyle = "black";
        ctx.font = "bold 30px serif";
        ctx.fillText("산성비", this.width / 2 + 10, this.y + 70);
        ctx.fillStyle = "black";
        ctx.font = "bold 30px serif";
        ctx.fillText("레이싱", this.width / 2 + 300, this.y + 70);
        
    }
}