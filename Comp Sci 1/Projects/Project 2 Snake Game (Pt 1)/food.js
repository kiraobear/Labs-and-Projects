class Food{
  constructor(location){
    this.loc = location;
    this.sz = cellDiam;
  }

  run(){
    this.render();
    this.snakeCollide();
  }

  render(){
    fill(255, 0, 0);
    rect(this.loc.x, this.loc.y, this.sz, this.sz);
  }

  snakeCollide(){
    if(this.loc.x === snake.loc.x && this.loc.y === snake.loc.y){//if food location and snake location
      let vx = floor(random(numCol))*cellDiam;//equal eachother add segment and score
      let vy = floor(random(numRow))*cellDiam;
      this.loc = createVector(vx, vy);
      snake.segments.push(createVector(this.loc.x, this.loc.y));//add segment to snake
      score++//score
    }
  }
}
