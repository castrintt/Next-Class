import IDoors from "../interfaces/Doors";

export default class Doors implements IDoors {
  constructor(
    private _isOpen: boolean,
    private _selected: boolean,
    private _number: string,
    private _haveGift: boolean
  ) {
    this._isOpen = _isOpen;
    this._selected = _selected;
    this._number = _number;
    this._haveGift = _haveGift;
  }
  isOpen(): boolean {
    return this._isOpen;
  }
  selected(): boolean {
    return this._selected;
  }
  number(): string {
    return this._number;
  }
  haveGift(): boolean {
    return this._haveGift;
  }

  alternateSelection(): Object {
    const selectedDoor = !this._selected;
    return new Doors(this._isOpen, selectedDoor, this._number, this._haveGift);
  }

  openDoor(): Object {
    const doorIsOpen: boolean = !this.isOpen;
    return new Doors(doorIsOpen, this._selected, this._number, this._haveGift);
  }

  rejectSelection(): Object {
    const selectedDoor: boolean = false;
    return new Doors(this._isOpen, selectedDoor, this._number, this._haveGift);
  }
}

