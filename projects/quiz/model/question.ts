import IQuestion from "../interfaces/IQuestion";
import AnswerModel from "./answer";

export default class QuestionModel implements IQuestion {
  constructor(
    private _id: number,
    private _announcements: string,
    private _answers: AnswerModel[],
    private _isRight: boolean,
    private _answered: boolean
  ) {
    this._id = _id;
    this._announcements = _announcements;
    this._answers = _answers;
    this._isRight = _isRight;
    this._answered = _answered;
  }

  id(): number {
    return this._id;
  }
  announcements(): string {
    return this._announcements;
  }
  answers(): any[] {
    return this._answers;
  }
  isRight(): boolean {
    return this._isRight;
  }
  answered(): boolean {
    for (let answer of this._answers) {
      if (answer.revealAnswer()) return true;
    }
    return false;
  }
}
