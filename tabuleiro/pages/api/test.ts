import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.status(200).json([
    {
      id: 1,
      name: "Caneta",
      price: 5.5,
    },
    {
      id: 2,
      name: "Caderno",
      price: 20,
    },
    {
      id: 3,
      name: "Lapis",
      price: 2,
    },
    {
      id: 4,
      name: "Borracha",
      price: 5,
    },
  ]);
}
