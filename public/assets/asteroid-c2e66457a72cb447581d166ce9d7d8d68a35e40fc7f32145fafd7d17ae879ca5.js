!function(){"undefined"==typeof Starbomber&&(window.Starbomber={});var t=Starbomber.Asteroid=function(e){e.color=t.COLOR,e.pos=e.pos||e.game.randomPosition(),e.radius=t.RADIUS,e.vel=e.vel||Starbomber.Util.randomVec(t.SPEED),this.collisionCounter=0,Starbomber.MovingObject.call(this,e),this.asteroid=new Image,this.asteroid.src="images/asteroid.png"};t.COLOR="#505050",t.RADIUS=15,t.SPEED=4,Starbomber.Util.inherits(t,Starbomber.MovingObject),t.prototype.collideWith=function(t){t instanceof Starbomber.Asteroid&&(this.vel=[t.vel[0]+this.vel[0],t.vel[1]+this.vel[1]],t.vel=[t.vel[0]-this.vel[0],t.vel[1]-this.vel[1]])},t.prototype.render=function(t){},t.prototype.draw=function(t){t.drawImage(this.asteroid,this.pos[0]-20,this.pos[1]-20,this.radius*Math.PI,this.radius*Math.PI)}}();