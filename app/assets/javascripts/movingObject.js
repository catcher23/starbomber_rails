(function () {
  if (typeof Starbomber === "undefined") {
    window.Starbomber = {};
  }

  var MovingObject = Starbomber.MovingObject = function (options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    this.bigExp = options.bigExp || false;
    this.enemyExp = options.enemyExp || false;
  };

  MovingObject.prototype.collideWith = function (otherObject) {
     // default do nothing
  };

  MovingObject.prototype.draw = function (ctx) {
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var centerDist = Starbomber.Util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  };

  MovingObject.prototype.isWrappable = true;

  MovingObject.prototype.move = function () {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    if (this.game.isOutOfBounds(this.pos)) {
      if (this.isWrappable) {
        this.pos = this.game.wrap(this.pos);
      } else {
        this.remove();
      }
    }
  };

  MovingObject.prototype.remove = function () {
    this.game.remove(this);
  };

  MovingObject.prototype.explode = function () {
    var norm = Starbomber.Util.norm(this.vel);
    var relVel = Starbomber.Util.scale(
      Starbomber.Util.dir(this.vel),
      Starbomber.Explosion.SPEED
    );

    var explosionVel = [
      relVel[0] + this.vel[0], relVel[1] + this.vel[1]
    ];

    var explosion = new Starbomber.Explosion({
      pos: this.pos,
      vel: explosionVel,
      color: this.color,
      game: this.game
    });
    this.game.add(explosion);
  };


})();
