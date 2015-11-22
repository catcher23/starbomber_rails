(function () {
  if (typeof Starbomber === "undefined") {
    window.Starbomber = {};
  }

  var Explosion = Starbomber.Explosion = function (options) {

    options.radius = Explosion.RADIUS;
    this.bigExp = options.bigExp;
    this.enemyExp = options.enemyExp;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 0;
    this.expx =  new Image();
    this.expa = new Image();
    this.expb = new Image();
    this.expx.src =  'images/expx.png';
    this.expa.src = 'images/expa.png';
    this.expb.src = 'images/expb.png';
    Starbomber.MovingObject.call(this, options);

  };

  Explosion.RADIUS = 2;
  Explosion.SPEED = -10;

  Starbomber.Util.inherits(Explosion, Starbomber.MovingObject);


  Explosion.prototype.update = function () {
    this.tickCount += 1;
       if (this.tickCount > this.ticksPerFrame) {
         tickCount = 0;
           // Go to the next frame
           this.frameIndex += 1;
       }
  };
  Explosion.prototype.render = function (ctx) {

  };
  Explosion.prototype.draw = function (ctx) {
    this.update();
    if (this.bigExp){

    this.expx.src = 'images/expx.png';
    ctx.drawImage(
      this.expx,
      this.frameIndex * 128,
      0,
      128,
      128,
      this.pos[0]-95,
      this.pos[1]-95,
      this.radius*30*Math.PI,
      this.radius*30*Math.PI
    );
  } else if (this.enemyExp) {


    ctx.drawImage(
      this.expb,
      this.frameIndex * 256,
      0,
      256,
      256,
      this.pos[0]-100,
      this.pos[1]-100,
      this.radius*30*Math.PI,
      this.radius*30*Math.PI
    );
  } else {


    ctx.drawImage(
      this.expa,
      this.frameIndex * 128,
      0,
      128,
      128,
      this.pos[0]-40,
      this.pos[1]-40,
      this.radius*10*Math.PI,
      this.radius*10*Math.PI
    );
  }
  };

  Explosion.prototype.isWrappable = false;

  Explosion.prototype.collideWith = function (otherObject) {
    console.log('explosion collision')
  };

})();
