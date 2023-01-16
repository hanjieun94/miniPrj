import Character from "./character.js";

export default class EtcDlg {
  constructor() {
    this.img = document.querySelector("#dialogue");
    this.isVisible = false;
    this.onExit = false;
    this.onContinue = false;
    this.width = 600;
    this.height = 300;
    this.x = 250;
    this.y = 250;
    this.showExplainDlg;
    this.showChangeCharDlg;

  }
  show() {
    this.isVisible = true;
  }
  draw(ctx) {
    if (!this.isVisible) return;
    let { x, y } = this;

    ctx.drawImage(this.img, x,y, this.width, this.height );

    ctx.fillStyle = "black";
    ctx.font = "bold 48px serif";
    ctx.fillText("Do you want to Exit?", this.width / 2 + 10, y + 70);

    ctx.font = "bold 30px serif";
    ctx.fillText("게임설명", this.width / 2 + 200, y + 150);
    ctx.font = "bold 30px serif";
    ctx.fillText("캐릭터 변경", this.width / 2 + 150, y + 210);
  }


  clickNotify(x, y) {
    if (this.isVisible) {
      if((513<=x&&x<=632)&&(377<=y&&y<=415)) {
        this.showExplainDlg();
      }
      if(465<=x&&x<=616&&444<=y&&y<=475) {
        this.showChangeCharDlg();
      }
    }
  }
 
}
