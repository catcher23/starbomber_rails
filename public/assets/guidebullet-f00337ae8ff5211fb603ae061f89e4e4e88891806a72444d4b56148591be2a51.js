!function(){"undefined"==typeof Starbomber&&(window.Starbomber={});var t=Starbomber.Guidebullet=function(e){e.radius=t.RADIUS,Starbomber.MovingObject.call(this,e)};t.RADIUS=70,t.SPEED=15,Starbomber.Util.inherits(t,Starbomber.MovingObject),t.prototype.collideWith=function(t){t instanceof Starbomber.Enemy&&(p1=t.pos,p2=this.game.ships[0].pos,this.game.ships[0].angle=Math.atan2(p1[1]-p2[1],p1[0]-p2[0]))},t.prototype.isWrappable=!1}();