!function(){"undefined"==typeof Starbomber&&(window.Starbomber={});var t=Starbomber.Ship=function(e){e.radius=t.RADIUS,e.vel=e.vel||[0,0],e.color=e.color||"lightgreen",this.collisionCounter=!1,this.justHit=!1,this.angle=0,this.yawSpeed=20,this.ship=new Image,this.ship2=new Image,this.ship.src="images/blueship.png",this.ship2.src="images/blueship2.png",Starbomber.MovingObject.call(this,e)};t.RADIUS=15,Starbomber.Util.inherits(t,Starbomber.MovingObject),t.prototype.fireBullet=function(){var t=(Starbomber.Util.norm(this.vel),Starbomber.Util.scale(Starbomber.Util.dir(this.vel),Starbomber.Bullet.SPEED),this),e=[Math.cos(t.angle)*Starbomber.Bullet.SPEED,Math.sin(t.angle)*Starbomber.Bullet.SPEED],i=new Starbomber.Bullet({pos:this.pos,vel:e,color:this.color,game:this.game});this.game.add(i)},t.prototype.power=function(t){"forward"==t?(this.vel[0]+=Math.cos(this.angle),this.vel[1]+=Math.sin(this.angle)):(this.vel[0]-=Math.cos(this.angle),this.vel[1]-=Math.sin(this.angle)),this.vel[0]*=.95,this.vel[1]*=.95},t.prototype.velZero=function(){this.vel=[0,0]},t.prototype.yaw=function(t){"left"==t?this.angle-=Math.PI/8:this.angle+=Math.PI/8},t.prototype.relocate=function(){this.pos=this.game.centerPosition(),this.vel=[0,0]},t.prototype.render=function(t){},t.prototype.draw=function(t){ship="",this.justHit?(that=this,setTimeout(function(){that.justHit=!1},100),ship=this.ship):ship=this.ship2,t.translate(this.pos[0],this.pos[1]),t.rotate(this.angle),t.translate(-this.pos[0],-this.pos[1]),t.drawImage(ship,this.pos[0]-23,this.pos[1]-23,this.radius*Math.PI,this.radius*Math.PI),t.setTransform(1,0,0,1,0,0)},t.prototype.explode=function(){var t=(Starbomber.Util.norm(this.vel),Starbomber.Util.scale(Starbomber.Util.dir(this.vel),Starbomber.Explosion.SPEED)),e=[t[0]+this.vel[0],t[1]+this.vel[1]],i=new Starbomber.Explosion({pos:this.pos,vel:e,color:this.color,game:this.game});this.game.add(i)},t.prototype.proximityTarget=function(t){p1=t.pos,p2=this.pos,this.angle=Math.atan2(p1[1]-p2[1],p1[0]-p2[0])},t.prototype.collideWith=function(t){if(t instanceof Starbomber.Asteroid||t instanceof Starbomber.Enemy){0==this.collisionCounter&&(t instanceof Starbomber.Asteroid&&(this.vel=[t.vel[0]-this.vel[0],t.vel[1]-this.vel[1]],t.vel=[t.vel[0]-this.vel[0],t.vel[1]-this.vel[1]]),this.vel[0]>4&&(this.vel[0]=4*Math.random()),this.vel[0]<-4&&(this.vel[0]=4*-Math.random()),this.vel[1]>4&&(this.vel[1]=4*Math.random()),this.vel[1]<-4&&(this.vel[1]=4*-Math.random()),t.vel[0]>4&&(t.vel[0]=4*Math.random()),t.vel[0]<-4&&(t.vel[0]=4*-Math.random()),t.vel[1]>4&&(t.vel[1]=4*Math.random()),t.vel[1]<-4&&(t.vel[1]=4*-Math.random()),this.collisionCounter=!0,this.justHit=!0,this.game.life-=1,$("#.scoreBoard").html("Your Score : "+this.game.score+" - Your Life : "+this.game.life+" - Wave : "+this.game.wave),this.game.life<1&&(this.remove(),this.explode(),this.game.gameOver()));var e=this;setTimeout(function(){e.collisionCounter=!1},500)}}}();