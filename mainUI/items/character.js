class Character{

    constructor(){
        this.img = document.querySelector("#character");
        this.ix = 3;
        this.iy = 3;
        this.iw = 317.5;
        this.ih = 414;

        this.x = 820;
        this.y = 660-108;

        this.speed = 3;

        this.walkDelay = 10;
        this.dir = 0;

        this.moveLeft = false;
        this.moveRight = false;
        this.moveUp = false;
        this.moveDown = false;

        //게임 끝내기 창 띄우기
        this.showExitDlg;
        this.showEnterDlg;
        this.showEtcDlg;

        //산성비 게임 입장창 취소
        this.onCloseGame1Dlg;
        //레이싱 게임 입장창 취소
        this.onCloseGame2Dlg;
        //게임 세팅/ 게임 설명창 취소 
        this.onCloseBasicDlg;

    }

    draw(ctx) {
        this.cx = this.iw*this.ix;
        this.cy = this.ih*this.iy;

        ctx.drawImage(this.img,
            this.cx,this.cy,this.iw,this.ih,
            this.x,this.y,50,80);
    }
    update(){

        //
        if((752<=this.x&&this.x<=784)&&(512<=this.y&&this.y<=532)){
            this.showEnterDlg();
            return;
        }
        //
        if((404<=this.x&&this.x<=424)&&(512<=this.y&&this.y<=524)){
            this.showEnterDlg();
            return;
        }
        //
        if((584<=this.x&&this.x<=604)&&(248<=this.y&&this.y<=276)){
            this.showEtcDlg();
            return;
        }

        //
        if(this.x>=850){
            this.showExitDlg();
            return;
        }

        if(this.moveUp){
            this.y -= this.speed;
            this.iy = 3;
        }
        if(this.moveDown){
            this.y += this.speed;
            this.iy = 0;
        }
        if(this.moveLeft){
            this.x -= this.speed;
            this.iy = 2;
        }
        if(this.moveRight){
            this.x += this.speed;
            this.iy = 1;
        }

        if(!(this.moveLeft||this.moveRight||this.moveUp||this.moveDown||false)){
            this.ix = 1;
            this.iy = 0;
                return;
        }
        
        this.walkDelay--;
        if(this.walkDelay == 0){
            if(this.ix==1){
                this.ix=0;
            }
            else{
            this.ix = this.ix==2?0:2;
            }
            this.walkDelay = 10;
        } 

    }
    move(dir){
        switch(dir){
            case 1:
                this.moveUp = true;
                break;
            case 3:
                this.moveDown = true;
                break;
            case 2:
                this.moveRight = true;
                break;
            case 4:
                this.moveLeft = true;
                break;    
        }
    }

    stop(dir){
        switch(dir){
            case 1:
                this.moveUp = false;
                break;
            case 3:
                this.moveDown = false;
                break;
            case 2:
                this.moveRight = false;
                break;
            case 4:
                this.moveLeft = false;
                break;    
            
        }
    }
}
export default new Character();