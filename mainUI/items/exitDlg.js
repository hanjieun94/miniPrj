import Character from "./character.js";

export default class ExitDlg {
  constructor() {
    this.img = document.querySelector("#dialogue");
    this.isVisible = false;
    this.onExit = false;
    this.onContinue = false;
    this.width = 600;
    this.height = 300;
    this.x = 250;
    this.y = 250;
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

    ctx.fillStyle = "gray";
    ctx.fillRect(x + 100, y + 150, 100, 50);
    ctx.fillStyle = "black";
    ctx.strokeRect(x + 100, y + 150, 100, 50);
    ctx.fillStyle = "gray";
    ctx.fillRect(x + 400, y + 150, 100, 50);
    ctx.fillStyle = "black";
    ctx.strokeRect(x + 400, y + 150, 100, 50);

    ctx.font = "bold 30px serif";
    ctx.fillText("YES", this.width / 2 + 70, y + 185);
    ctx.font = "bold 30px serif";
    ctx.fillText("NO", this.width / 2 + 375, y + 185);
  }

  clickNotify(x, y) {
    if (this.isVisible) {
      if (357 <= x && x <= 457 && 408 <= y && y <= 458) {
        window.location = "../intro/index.html";
      }
      if (657 <= x && x <= 757 && 408 <= y && y <= 458) {
        this.isVisible = false;
        Character.x = 820;
      }
    }
  }
}
