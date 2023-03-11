import { NextApiRequest, NextApiResponse } from "next";

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const HTMLContent: string = `{
    "sender":{
      "name":"${req.body.fullname}",
      "email":"${req.body.email}"
    },
    "to": [
      {
        "email":"${process.env.CONTACT_EMAIL_ADDRESS}",
        "name":"Aaditya Chapagain"
      }
    ],
    "subject":"${req.body.subject}",
    "htmlContent":"<html><head></head><body>${req.body.message}</body></html>"
  }`;

  const sendInBlueRes = await fetch(
    "https://api.sendinblue.com/v3/smtp/email",
    {
      body: HTMLContent,
      headers: {
        accept: "application/json",
        "api-key": process.env.SMTP_API_KEY,
        "content-type": "application/json"
      },
      method: "POST"
    }
  );

  const { error } = await sendInBlueRes.json();

  if (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  console.log("API called successfully. Returned data: ");
  return res.status(200).json({ message: "Email Event Successfully Created!" });
}
