(function () {
  if (typeof Starbomber === "undefined") {
    window.Starbomber = {};
  }

  var Bullet = Starbomber.Bullet = function (options) {
    options.radius = Bullet.RADIUS;
    Starbomber.MovingObject.call(this, options);
    this. bullet = new Image();
    this.bullet.src = 'images/greenball2.png';
  };

  Bullet.RADIUS = 2;
  Bullet.SPEED = 25;

  Starbomber.Util.inherits(Bullet, Starbomber.MovingObject);

  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Starbomber.Enemy) {
      otherObject.vel = [otherObject.vel[0] + 0.7* this.vel[0], otherObject.vel[1] + 0.7 * this.vel[1]]
      this.remove();
      otherObject.collisionCounter = true;
      otherObject.justHit = true;
      otherObject.life -= 1;

     if (otherObject.life < 1) {
       otherObject.remove();
       otherObject.explode();
       this.game.score += 1;
       if (this.game.score > this.game.highScore) {
         this.game.highScore = this.game.score;
       }
       $( '.scoreBoard' ).html( 'Your Score : ' + this.game.score + ' - Your Life : ' + this.game.life+ ' - Wave : ' + this.game.wave);
     }
    }
    if (otherObject instanceof Starbomber.Asteroid) {
      otherObject.vel = [otherObject.vel[0] + 0.5*this.vel[0], otherObject.vel[1] + 0.5*this.vel[1]]
      this.remove();
      otherObject.remove();
      otherObject.explode();
    }
  };

Bullet.prototype.inProximityOf = function (otherObject) {
  var proximityDist = Starbomber.Util.dist(this.pos, otherObject.pos);
  return proximityDist < 70;
}

Bullet.prototype.render = function (ctx) {

};

  Bullet.prototype.draw = function (ctx) {
    ctx.drawImage(this.bullet, this.pos[0]-6,this.pos[1]-6, this.radius*3*Math.PI , this.radius*3*Math.PI );
  };

  Bullet.prototype.isWrappable = false;
})();
