// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import AnswerModel from "../../../model/answer";
import QuestionModel from "../../../model/question";
import { questions } from "../questionBank";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionModel[]>
) {
  const id: number = Number(req.query.id);
  const name: string = "John Doe";
  res.status(200).json(questions);
}
