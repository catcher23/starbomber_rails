(function () {
  if (typeof Starbomber === "undefined") {
    window.Starbomber = {};
  }

  var Asteroid = Starbomber.Asteroid = function (options) {
    options.color = Asteroid.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.radius = Asteroid.RADIUS;
    options.vel = options.vel || Starbomber.Util.randomVec(Asteroid.SPEED);
    this.collisionCounter = 0;
    Starbomber.MovingObject.call(this, options);

    this.asteroid = new Image();
    this.asteroid.src = 'images/asteroid.png';
  };

  Asteroid.COLOR = "#505050";
  Asteroid.RADIUS = 15;
  Asteroid.SPEED = 4;

  Starbomber.Util.inherits(Asteroid, Starbomber.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Starbomber.Asteroid) {
      this.vel = [otherObject.vel[0] + this.vel[0], otherObject.vel[1] + this.vel[1]]
      otherObject.vel = [otherObject.vel[0] - this.vel[0], otherObject.vel[1] - this.vel[1]]
    };
  };

  Asteroid.prototype.render = function (ctx) {
  };

  Asteroid.prototype.draw = function (ctx) {

    ctx.drawImage(this.asteroid, this.pos[0]-20,this.pos[1]-20, this.radius*Math.PI , this.radius*Math.PI );
  };


})();
