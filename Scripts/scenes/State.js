"use strict";
var scenes;
(function (scenes) {
    var State;
    (function (State) {
        State[State["NO_SCENE"] = 1] = "NO_SCENE";
        State[State["START"] = 2] = "START";
        State[State["PLAY"] = 3] = "PLAY";
        State[State["END"] = 4] = "END";
        State[State["NUM_OF_SCENES"] = 5] = "NUM_OF_SCENES";
    })(State = scenes.State || (scenes.State = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=State.js.map