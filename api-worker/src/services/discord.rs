use worker::*;
use crate::models::contact::*;

pub async fn send_discord_notification(
    contact_req: &ContactRequest, 
    webhook_url: &str
) -> Result<()> {
    let truncated_message = if contact_req.message.len() > 1000 {
        format!("{}...", &contact_req.message[..1000])
    } else {
        contact_req.message.clone()
    };

    let payload = DiscordPayload {
        embeds: vec![
            DiscordEmbed {
                title: "📧 New Email Notification".to_string(),
                color: 0x5865F2,
                fields: vec![
                    DiscordField {
                        name: "From".to_string(),
                        value: format!("`{} <{}>`", contact_req.fullname, contact_req.email),
                        inline: Some(true),
                    },
                    DiscordField {
                        name: "Subject".to_string(),
                        value: format!("```{}```", contact_req.subject),
                        inline: Some(true),
                    },
                    DiscordField {
                        name: "Message".to_string(),
                        value: truncated_message,
                        inline: None,
                    },
                ],
                timestamp: chrono::Utc::now().to_rfc3339(),
                footer: DiscordFooter {
                    text: "Email Notification System".to_string(),
                },
            },
        ],
    };

    let payload_json = match serde_json::to_string(&payload) {
        Ok(json) => json,
        Err(e) => return Err(format!("Failed to serialize Discord payload: {}", e).into()),
    };

    let mut headers = Headers::new();
    headers.set("Content-Type", "application/json")?;

    let request = Request::new_with_init(
        webhook_url,
        RequestInit::new()
            .with_method(Method::Post)
            .with_headers(headers)
            .with_body(Some(payload_json.into())),
    )?;

    let mut response = Fetch::Request(request).send().await?;

    if !response.status_code() == 200 {
        let text = response.text().await?;
        return Err(format!("Discord webhook error: {} - {}", response.status_code(), text).into());
    }

    Ok(())
}