type FunctionObject = () => Object;

export default interface IDoors {
  alternateSelection: FunctionObject;
  openDoor: FunctionObject;
  rejectSelection: FunctionObject;
}
