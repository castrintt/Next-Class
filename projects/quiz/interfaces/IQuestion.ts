export default interface IQuestion {
  id: () => number;
  announcements: () => string;
  answers: () => any[];
  isRight: () => boolean;
  answered: () => boolean;
}
