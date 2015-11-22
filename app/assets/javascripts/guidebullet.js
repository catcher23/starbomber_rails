(function () {
  if (typeof Starbomber === "undefined") {
    window.Starbomber = {};
  }

  var Guidebullet = Starbomber.Guidebullet = function (options) {
    options.radius = Guidebullet.RADIUS;

    Starbomber.MovingObject.call(this, options);
  };

  Guidebullet.RADIUS = 70;
  Guidebullet.SPEED = 15;

  Starbomber.Util.inherits(Guidebullet, Starbomber.MovingObject);

  Guidebullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Starbomber.Enemy) {
      p1 = otherObject.pos;
      p2 = this.game.ships[0].pos;
      this.game.ships[0].angle = Math.atan2(p1[1] - p2[1], p1[0] - p2[0]);
    }
  };
  Guidebullet.prototype.isWrappable = false;
})();
