"use strict";
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));
function checkDoorState(state) {
    console.log("enum value is " + state);
    switch (state) {
        case DoorState.Open:
            console.log("Door is Open");
            break;
        case DoorState.Closed:
            console.log('Door is Closed');
            break;
    }
}
checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);
//# sourceMappingURL=hello_typescript.js.map