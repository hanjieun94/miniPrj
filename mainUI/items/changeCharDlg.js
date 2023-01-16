import EtcDlg from "../itmes/etcDlg";

export default class changeCharDlg{

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
        ctx.fillText("A", this.width / 2 + 10, this.y + 200);
        ctx.fillStyle = "black";
        ctx.font = "bold 30px serif";
        ctx.fillText("B", this.width / 2 + 300, this.y + 200);
        
    }
    clickNotify(x, y) {
        if(this.isVisible) {
            
            if((513<=x&&x<=632)&&(377<=y&&y<=415)) {
            this.showExplainDlg();
          }
          if(465<=x&&x<=616&&444<=y&&y<=475) {
            this.showChangeCharDlg();
          }
        }
    }
}