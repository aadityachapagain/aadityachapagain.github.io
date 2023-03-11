import type { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "../../../../lib/sendEmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      return sendEmail(req, res);
    default:
      return res.status(400).json({ message: "Invalid method." });
  }
}
