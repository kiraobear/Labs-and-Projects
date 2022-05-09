class Collectables{
    constructor(x, y, l, w){
        this.loc = createVector(x, y);
        this.lngth = l;
        this.wdth = w;
        //***** Collectable Bounds *****
        this.bounds = {
            top : this.loc.y,
            lower : this.loc.y + this.wdth,
            left : this.loc.x,
            right : this.loc.x + this.lngth

        };

    }

    

}
