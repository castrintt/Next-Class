import type { NextApiRequest, NextApiResponse } from "next";

const question = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const id: string = String(req.query.id);
    res.status(200).json({
      id,
      enunciado: "Qual é a sua cor preferida",
      respostas: ["Branca", "Vermelha", "Azul"],
    });
  } else {
    res.status(405).send("teste");
  }
};

export default question;
