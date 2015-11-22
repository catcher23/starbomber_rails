(function () {
  if (typeof Starbomber === "undefined") {
    window.Starbomber = {};
  }

  var Ebullet = Starbomber.Ebullet = function (options) {
    options.radius = Ebullet.RADIUS;

    Starbomber.MovingObject.call(this, options);
  };

  Ebullet.RADIUS = 2;
  Ebullet.SPEED = 15;

  Starbomber.Util.inherits(Ebullet, Starbomber.MovingObject);

  Ebullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Starbomber.Ship) {
      otherObject.vel = [otherObject.vel[0] + 0.001*this.vel[0], otherObject.vel[1] + 0.001*this.vel[1]]
      this.remove();
      otherObject.collisionCounter = true;
      otherObject.justHit = true;
      this.game.life -= 1;
    $( '.scoreBoard' ).html( 'Your Score : ' + this.game.score + ' - Your Life : ' + this.game.life+ ' - Wave : ' + this.game.wave);
       if (this.game.life < 1) {
         otherObject.explode();
         otherObject.remove();
         this.game.gameOver();
       }
    }

    if (otherObject instanceof Starbomber.Asteroid) {
      otherObject.vel = [otherObject.vel[0] + 0.5*this.vel[0], otherObject.vel[1] + 0.5*this.vel[1]]
      this.remove();
      otherObject.remove();
      otherObject.explode();

 }

  };

  Ebullet.prototype.render = function (ctx) {


  };

  Ebullet.prototype.draw = function (ctx) {

    var ebullet = ebullet || new Image();
    ebullet.src = 'images/redball2.png';

    ctx.drawImage(ebullet, this.pos[0]-5,this.pos[1]-5, this.radius*2.5*Math.PI , this.radius*2.5*Math.PI );
  };

  Ebullet.prototype.isWrappable = false;
})();
