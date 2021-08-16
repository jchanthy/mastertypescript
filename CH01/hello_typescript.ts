enum DoorState{
    Open,
    Closed
}
function checkDoorState(state:DoorState){
    console.log(`enum value is ${state}`);
    switch (state) {
        case DoorState.Open:
            console.log(`Door is Open`);
            break;
        case DoorState.Closed:
            console.log('Door is Closed');
            break;

    }
}

checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);
