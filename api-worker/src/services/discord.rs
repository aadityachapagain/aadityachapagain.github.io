use worker::*;
use crate::models::contact::*;

pub async fn send_discord_notification(
    contact_req: &ContactRequest, 
    webhook_url: &str
) -> Result<()> {
    // Truncate message if it's too long for Discord
    let truncated_message = if contact_req.message.len() > 4000 {
        format!("{}...\n\n*[Message truncated - see email for full content]*", &contact_req.message[..3900])
    } else {
        contact_req.message.clone()
    };
    
    // Format time for the footer
    let timestamp = chrono::Utc::now().to_rfc3339();
    
    // Get current date and time in a more readable format
    let dt = chrono::Utc::now();
    let formatted_time = dt.format("%B %d, %Y at %H:%M UTC").to_string();
    
    // Create a cleaner Discord message
    let payload = serde_json::json!({
        "embeds": [{
            "title": "📨 New Contact Form Submission",
            "description": "A new message has been received via the website contact form.",
            "color": 5793266, // Green-blue color
            "fields": [
                {
                    "name": "👤 From",
                    "value": format!("`{}` <{}>", contact_req.fullname, contact_req.email),
                    "inline": false
                },
                {
                    "name": "📝 Subject",
                    "value": format!("**{}**", contact_req.subject),
                    "inline": false
                },
                {
                    "name": "💬 Message",
                    "value": truncated_message,
                    "inline": false
                }
            ],
            "timestamp": timestamp,
            "footer": {
                "text": format!("Contact Form • {}", formatted_time),
                "icon_url": "https://www.aadityachapagain.com/Profile.png" // Optional: Your website icon or avatar
            },
            "thumbnail": {
                "url": "https://www.aadityachapagain.com/Profile.png" // Optional: Your website icon or avatar
            }
        }]
    });

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