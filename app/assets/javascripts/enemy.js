(function () {
  if (typeof Starbomber === "undefined") {
    window.Starbomber = {};
  }

  var Enemy = Starbomber.Enemy = function (options) {

    this.pos = options.pos;

    this.game = options.game;
    options.radius = Enemy.RADIUS;
    options.vel = options.vel || [0, 0];
    options.color = options.color || 'lightgreen'
    this.collisionCounter = false;
    this.justHit = false;
    this.life = 3;
      this.enemy = new Image();
      this.enemy2 = new Image();
      this.enemy.src = 'images/efighter2.png';
      this.enemy2.src = 'images/efighter.png';
    random = Math.random();
    this.speed = 1.8 * random

    this.angle = 0;
    Starbomber.MovingObject.call(this, options)
  };

  Enemy.RADIUS = 15;

  Starbomber.Util.inherits(Enemy, Starbomber.MovingObject);

  Enemy.prototype.fireEbullet = function () {
    var norm = Starbomber.Util.norm(this.vel);
    var relVel = Starbomber.Util.scale(
      Starbomber.Util.dir(this.vel),
      Starbomber.Ebullet.SPEED
    );
    var that = this;
    var ebulletVel = [
      Math.cos(that.angle)*Starbomber.Ebullet.SPEED , Math.sin(that.angle)*Starbomber.Ebullet.SPEED
    ];

    var ebullet = new Starbomber.Ebullet({
      pos: this.pos,
      vel: ebulletVel,
      color: this.color,
      game: this.game
    });

    this.game.add(ebullet);

  };

  Enemy.prototype.power = function (impulse) {
    var that = this;
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];


  };

  Enemy.prototype.relocate = function () {
    this.pos = this.game.centerPosition();
    this.vel = [0, 0];
  };

  Enemy.prototype.render = function (ctx) {


  };
  Enemy.prototype.draw = function (ctx) {
    enemy = '';
    if (this.justHit) {
    that = this;
    setTimeout(function(){
    that.justHit = false;
    }, 100);
      enemy = this.enemy;
    } else {
      enemy = this.enemy2;
    }
ctx.translate(this.pos[0],this.pos[1]);    // translate to center of rotation
ctx.rotate(this.angle );      // rotate, here +90deg to comp image dir.
ctx.translate(-this.pos[0],-this.pos[1]);  // translate back
     // draw image

ctx.drawImage(enemy, this.pos[0]-23,this.pos[1]-23, this.radius*Math.PI , this.radius*Math.PI );
ctx.setTransform(1,0,0,1,0,0);
  };
  Enemy.prototype.explode = function () {
    var norm = Starbomber.Util.norm(this.vel);
    var relVel = Starbomber.Util.scale(
      Starbomber.Util.dir(this.vel),
      Starbomber.Explosion.SPEED
    );

    var explosionVel = [
      0.7*relVel[0] + 0.5*this.vel[0], 0.7*relVel[1] + 0.5*this.vel[1]
    ];


    var explosion = new Starbomber.Explosion({
      pos: this.pos,
      enemyExp: true,
      vel: explosionVel,
      color: this.color,
      game: this.game
    });

    this.game.add(explosion);

    if (this.game.enemies.length == 0 && this.game.NUM_ENEMIES !== 2) {
      var that = this;
      setTimeout(
      function(){
      that.game.wave +=1
      $( '#scoreBoard' ).html( 'Your Score : ' + that.game.score + ' - Your Life : ' + that.game.life+ ' - Wave : ' + that.game.wave);
      that.game.nextLevel();
    }, 1000);
    }
  };


    Enemy.prototype.collideWith = function (otherObject) {

      if (otherObject instanceof Starbomber.Asteroid || otherObject instanceof Starbomber.Ship) {

        if (this.collisionCounter == false) {
        this.vel = [otherObject.vel[0] - this.vel[0], otherObject.vel[1] - this.vel[1]]
        otherObject.vel = [otherObject.vel[0] - this.vel[0], otherObject.vel[1] - this.vel[1]]

        if (this.vel[0] > 4) {this.vel[0] = 4}
        if (this.vel[0] < -4) {this.vel[0] = -4}
        if (this.vel[1] > 4) {this.vel[1] = 4}
        if (this.vel[1] < -4) {this.vel[1] = -4}

        if (otherObject.vel[0] > 4) {otherObject.vel[0] = 4}
        if (otherObject.vel[0] < -4) {otherObject.vel[0] = -4}
        if (otherObject.vel[1] > 4) {otherObject.vel[1] = 4}
        if (otherObject.vel[1] < -4) {otherObject.vel[1] = -4}

         this.collisionCounter = true;
         this.justHit = true;
         this.life -= 1;

        if (this.life < 1) {
          this.remove();
          this.explode();
          $( '#scoreBoard' ).html( 'Your Score : ' + this.game.score + ' - Your Life : ' + this.game.life+ ' - Wave : ' + this.game.wave);
        }
     }
     var that = this;
     setTimeout(
     function(){
     that.collisionCounter = false;
   }, 600);
 }
}

Enemy.prototype.power = function () {
    this.vel[0] = Math.cos(this.angle) *2 * this.speed;
    this.vel[1] = Math.sin(this.angle)*2 * this.speed;
if (Starbomber.Util.dist(this.pos,this.game.ships[0].pos) < 250) {
  this.vel = [0,0];
};

};

Enemy.prototype.move = function () {
p1 = this.game.ships[0].pos;
p2 = this.pos;
this.angle = Math.atan2(p1[1] - p2[1], p1[0] - p2[0]);
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
random = Math.random();
if (random >0.98) {
this.fireEbullet();
};

this.power();

  if (this.game.isOutOfBounds(this.pos)) {
    if (this.isWrappable) {
      this.pos = this.game.wrap(this.pos);
    } else {
      this.remove();
    }
  }
};
})();
