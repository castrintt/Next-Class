import IAnswer from "../interfaces/IAnswer";

export default class AnswerModel implements IAnswer {
  constructor(
    private _value: string,
    private _isRight: boolean,
    private _revealAnswer: boolean = false
  ) {
    this._value = _value;
    this._isRight = _isRight;
    this._revealAnswer = _revealAnswer;
  }
  
  static rightAnswer(value: string) {
    return new AnswerModel(value, true);
  }

  static wrongAnswer(value: string) {
     return new AnswerModel(value, false);
  }

  value(): string {
    return this._value;
  }
  isRight(): boolean {
    return this._isRight;
  }
  revealAnswer(): boolean {
    return this._revealAnswer;
  }
}
