//Start class button
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
        this.mouseOverButt = this.checkBounds();
        
    }

    update(){
        this.mouseOverButt = this.checkBounds();
        
    }

    checkBounds(){
        //***** rat location is mouse location ***** 
        let ratY = mouseY;
        let ratX = mouseX;
        
        if (ratX >= this.bounds.left &&
            ratY <= this.bounds.right &&
            ratY >= this.bounds.top &&
            ratY <= this.bounds.bottom){
                return true;

            }

            return false;

    }

    render(){
        let clr = this.mouseOverButt ?  color(0, 255, 0) : color(255, 0, 0);
        fill(clr);
        rect(this.loc.x, this.loc.y, this.lngth, this.wdth, this.rndness);
        
    }
}
//End class button
