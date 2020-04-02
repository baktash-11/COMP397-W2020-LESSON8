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
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super); //its importand to user export when we create our class inside module.
        /**
         *this is the constructorr
         * @param {string} lableString
         * @param {string} fontSize
         * @param {string} fontFamily
         * @param {string} fontColor
         * @param {number} x
         * @param {number} y
         * @param {boolean} isCentered
         * @memberof Label
         * have to go and check createjs.com/docs/easel.js
         */
        function Label(lableString, fontSize, fontFamily, fontColor, x, y, isCentered) {
            if (lableString === void 0) { lableString = "Change me"; }
            if (fontSize === void 0) { fontSize = "20px"; }
            if (fontFamily === void 0) { fontFamily = "Arial"; }
            if (fontColor === void 0) { fontColor = "#ff00e1"; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, lableString, fontSize + " " + fontFamily, fontColor) || this;
            _this.lableString = lableString;
            _this.fontSize = fontSize;
            _this.fontFamily = fontFamily;
            _this.fontColor = fontColor;
            _this.isCentered = isCentered;
            if (isCentered) //for making it easy we just add the font family and for size to gatter 
             {
                //getBounds and getMeasured are the methods which get the height and width of an object
                //getting the they width value and devide it in half
                _this.regX = _this.getBounds().width * .5;
                //getting the they height value and devide it in half
                _this.regY = _this.getMeasuredHeight() * .5;
            }
            //assigning the value of x and y
            _this.x = x;
            _this.y = y;
            return _this;
        }
        Label.prototype.setText = function (newText) {
            this.text = newText;
            this.regX = this.getBounds().width * .5;
            this.regY = this.getMeasuredHeight() * .5;
        };
        return Label;
    }(createjs.Text //its importand to user export when we create our class inside module.
    ));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=Label.js.map