import { NextApiRequest } from "next";

export const runtime = "edge";

export default async function sendEmail(
  req: NextApiRequest
) {
    const emailData = {
      from: `${req.body.fullname} <${req.body.email}>`, // Use verified domain
      to: [process.env.CONTACT_EMAIL_ADDRESS], // Array of recipients
      reply_to: req.body.email, // User's email as reply-to
      subject: req.body.subject,
      html: `<html><body>${req.body.message}</body></html>`
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.SMTP_API_KEY}`
      },
      body: JSON.stringify(emailData)
    });

    return response
}