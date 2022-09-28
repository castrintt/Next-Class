import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

export const questions: QuestionModel[] = [
  new QuestionModel(306, "Qual bicho transmite a doença de chagas", [
    AnswerModel.wrongAnswer("Abelha"),
    AnswerModel.wrongAnswer("Formiga"),
    AnswerModel.wrongAnswer("Pulga"),
    AnswerModel.rightAnswer("Barbeiro"),
  ]),
  new QuestionModel(322, "Qual bicho transmite a doença de chagas", [
    AnswerModel.wrongAnswer("Caju"),
    AnswerModel.wrongAnswer("Côco"),
    AnswerModel.wrongAnswer("Chuchu"),
    AnswerModel.rightAnswer("Abóbora"),
  ]),
];
