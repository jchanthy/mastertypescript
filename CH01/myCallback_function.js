"use strict";
// tslint:disable-next-line:only-arrow-functions
var myCallback = function (text) {
    console.log("myCallback called with + " + text);
};
function withCallbackArg(message, callbackFn) {
    console.log("withCallback called, message, message: " + message);
    callbackFn(message + " from withCallback");
}
withCallbackArg("initial text, " + myCallback);
//# sourceMappingURL=myCallback_function.js.map