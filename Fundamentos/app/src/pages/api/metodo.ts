import type { NextApiRequest, NextApiResponse } from "next";

const HttpRequest = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json({ name: "Pedro" });
  } else if (req.method === "POST") {
    res.status(200).json({ name: "Maria" });
  }
};

export default HttpRequest;
