export default interface IAnswer {
  value: () => string;
  isRight: () => boolean;
  revealAnswer: () => boolean;
}
