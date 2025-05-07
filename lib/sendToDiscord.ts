import { NextApiRequest, NextApiResponse } from "next";

export const runtime = "edge";

export default async function SendToDiscord(
  req: NextApiRequest,
  webook: string
) {
    const discordPayload = {
        embeds: [{
            title: "📧 New Email Notification",
            color: 0x5865F2,
            fields: [
            { 
                name: "From", 
                value: `\`${req.body.fullname || 'No name'} <${req.body.email}>\``,
                inline: true
            },
            { 
                name: "Subject", 
                value: `\`\`\`${req.body.subject}\`\`\``,
                inline: true
            },
            {
                name: "Message",
                value: `${req.body.message.slice(0, 1000)}${req.body.message.length > 1000 ? '...' : ''}`
            }
            ],
            timestamp: new Date().toISOString(),
            footer: {
            text: "Email Notification System"
            }
        }]
        };

    const discordResponse = await fetch(webook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(discordPayload)
    });

    return discordResponse
}