//Start class Butt##########
class Butt{
    constructor(x, y, l, w, rndness, msg){
        this.loc = createVector(x, y);
        this.lngth = l;
        this.wdth = w;
        this.rndness = rndness;
        this.msg = msg;
        this.bounds = {
            left : this.loc.x, 
            right : this.loc.x + this.lngth,
            top : this.loc.y,
            bottom : this.loc.y + this.wdth

        };
        this.ratOverButt = this.checkBounds();
        
    }

    update(){
        this.ratOverButt = this.checkBounds();

    }

    checkBounds(){
        //***** rat location is mouse location ***** 
        let ratX = mouseX;
        let ratY = mouseY;
        
        if (ratX >= this.bounds.left &&
            ratX <= this.bounds.right &&
            ratY >= this.bounds.top &&
            ratY <= this.bounds.bottom){
                return true;

            }

            return false;

    }

    render(){
        let clr = this.ratOverButt ?  color(0, 255, 0) : color(255, 0, 0);
        fill(clr);
        rect(this.loc.x, this.loc.y, this.lngth, this.wdth, this.rndness);
        
    }
}
//End class Butt##########
