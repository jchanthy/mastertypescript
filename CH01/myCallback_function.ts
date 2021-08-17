// tslint:disable-next-line:only-arrow-functions
var myCallback = function(text: string): void {
  console.log(`myCallback called with + ${text}`);
}
function withCallbackArg(message: string,
                         callbackFn: (text: string) => void){
  console.log(`withCallback called, message, message: ${message}`);
  callbackFn(`${message} from withCallback`);
}
withCallbackArg(`initial text, ${myCallback}`);
