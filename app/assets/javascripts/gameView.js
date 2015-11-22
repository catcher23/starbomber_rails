(function () {
  if (typeof Starbomber === "undefined") {
    window.Starbomber = {};
  }

  var GameView = Starbomber.GameView = function (game, gameBg, ctx1, ctx2) {
    this.ctx1 = ctx1;
    this.ctx2 = ctx2;
    this.game = game;
    this.gameBg = gameBg;
    this.ship = this.game.addShip();
    this.timerId = null;
  };
  var that = this;
  GameView.MOVES = {
  };

  GameView.prototype.bindKeyHandlers = function () {
    var ship = this.ship;

    Object.keys(GameView.MOVES).forEach(function (k) {
      var move = GameView.MOVES[k];
      key(k, function () { ship.power(move); });
    });

    key("space", function () { ship.fireBullet() });
    key("up", function () { ship.power('forward') });
    key("down", function () { ship.power('back') });
    key("left", function () { ship.yaw('left') });
    key("right", function () { ship.yaw('right') });
    key("a", function () { ship.velZero() });

  };

  GameView.prototype.start = function () {
    var gameView = this;
    var step = function () {
    gameView.gameBg.render(gameView.ctx1, gameView.game);
  };
        window.requestAnimationFrame(step);
    this.bindKeyHandlers();
};

  GameView.prototype.stop = function () {
    clearInterval(this.timerId);
  };
})();
