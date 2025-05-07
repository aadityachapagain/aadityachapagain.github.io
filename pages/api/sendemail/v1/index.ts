import type { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "../../../../lib/sendEmail";
import SendToDiscord from "../../../../lib/sendToDiscord";

export const runtime = "edge";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let emailSuccess = false;
    let discordSuccess = false;
    let emailError = null;
    let discordError = null;

    // Try to send email
    try {
      const emailResponse = await sendEmail(req);
      emailSuccess = emailResponse.ok;
      if (!emailSuccess) {
        emailError = await emailResponse.text();
        console.error("Email sending failed:", emailError);
      }
    } catch (error) {
      emailError = error;
      console.error("Email error:", error);
    }

    // Try to send Discord notification
    try {
      const discordResponse = await SendToDiscord(req, process.env.DISCORD_EMAIL_WEBHOOK_URL);
      discordSuccess = discordResponse.ok;
      if (!discordSuccess) {
        discordError = await discordResponse.text();
        console.error("Discord notification failed:", discordError);
      }
    } catch (error) {
      discordError = error;
      console.error("Discord error:", error);
    }

    // Determine overall response
    if (emailSuccess || discordSuccess) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: "Notification sent successfully",
        emailSent: emailSuccess,
        discordSent: discordSuccess
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      // Both operations failed
      return new Response(JSON.stringify({ 
        success: false, 
        message: "Operation not successful. Could not send notifications.",
        emailError: emailError ? String(emailError) : null,
        discordError: discordError ? String(discordError) : null
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error("Unexpected error:", error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: "An unexpected error occurred."
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
