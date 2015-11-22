(function () {
  if (typeof Starbomber === "undefined") {
    window.Starbomber = {};
  }

  var GameBg = Starbomber.GameBg = function () {

  };

  GameBg.BG_COLOR = "#000000";
  GameBg.DIM_X = 1400;
  GameBg.DIM_Y = 800;
  GameBg.FPS = 32;


  GameBg.prototype.render = function (ctx1, game) {
    var that = this;
    this.img = new Image();
    game.render(ctx1);
    this.img.onload = function () {
      setInterval(function(){
      that.draw(ctx1, game);
      game.step();
    }, 1000/GameBg.FPS);

    };
    this.img.src = 'images/myImage.png';
  };

  GameBg.prototype.draw = function (ctx1, game) {
      ctx1.drawImage(this.img, 0,0);
      game.draw(ctx1);
    };



})();
