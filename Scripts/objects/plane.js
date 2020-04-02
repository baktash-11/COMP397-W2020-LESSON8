"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        //Public properties 
        //Constructor 
        function Plane() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("plane"), 0, 0, true) || this;
            _this.Start();
            return _this;
        }
        //Privae 
        Plane.prototype._checkBounds = function () {
            //check the left bound 
            if (this.position.x <= this.halfHeight) {
                this.position = new objects.Vector2(this.halfHeight, this.position.y);
            }
            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new objects.Vector2(config.Game.SCREEN_WIDTH - this.halfWidth);
            }
            //check the right bounds
        };
        Plane.prototype._move = function () {
            var newPositionX = util.Math.Lerp(this.position.x, this.stage.mouseX, 0.09);
            this.position = new objects.Vector2(newPositionX, this._verticalPosition);
        };
        //Public 
        Plane.prototype.Start = function () {
            this._verticalPosition = 420; //lock the plane in bottom of the screen
        };
        Plane.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Plane.prototype.Reset = function () {
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map