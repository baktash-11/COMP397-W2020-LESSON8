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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        //player: objects.Player;------------------- we do not need the player object any more
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Play.prototype.Start = function () {
            //we do no need lables and buttons in our play scene so we will comment them out
            //instantiate a new Text object
            /* this._playLable = new objects.Label("Play Scene", "80px", "Consolas", "#ffff00", 320, 180, true);
            // buttons
            this._nextButton = new objects.Button(config.Game.ASSETS.getResult("nextButton"), 320, 430, true);
            //this.player = new objects.Player(); ------------------- we do not need the player object any more */
            this._ocean = new objects.Ocean();
            this._palne = new objects.Plane();
            this.Main();
        };
        Play.prototype.Update = function () {
            //this.player.Update();------------------- we do not need the player object any more
            //managers.Collision.AABBCheck(this.player,this.startButton);------------------- we do not need the player object any more
            this._ocean.Update();
            this._palne.Update();
        };
        Play.prototype.Main = function () {
            this.addChild(this._ocean);
            this.addChild(this._palne);
            this._palne.position.y = 100;
            /*  this.addChild(this._playLable);
             this.addChild(this._nextButton);
             //this.addChild(this.player);   ------------------- we do not need the player object any more
 
             this._nextButton.on("click", ()=>{
                 config.Game.SCENE = scenes.State.END;
             }); */
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map