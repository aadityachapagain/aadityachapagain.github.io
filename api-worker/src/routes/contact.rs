use worker::*;
use crate::{
    models::contact::ContactRequest,
    services::{
        discord::send_discord_notification,
        email::send_email_notification,
    },
    utils::response::json_response,
};

// Handle contact form submissions
pub async fn handle_contact(mut req: Request, env: Env) -> Result<Response> {
    // Check origin header
    let origin = match req.headers().get("Origin")? {
        Some(origin) => origin,
        None => return json_response(403, &serde_json::json!({
            "success": false,
            "message": "Missing origin header"
        })),
    };

    // Verify origin is from our domain
    if origin != "https://aadityachapagain.com" {
        console_log!("Invalid origin: {}", origin);
        return json_response(403, &serde_json::json!({
            "success": false,
            "message": "Requests must originate from aadityachapagain.com"
        }));
    }

    // Parse request JSON
    let contact_req: ContactRequest = match req.json().await {
        Ok(data) => data,
        Err(e) => {
            console_error!("Failed to parse request JSON: {}", e);
            return json_response(400, &serde_json::json!({
                "success": false,
                "message": "Invalid JSON payload"
            }));
        }
    };

    // Validate request data
    if contact_req.fullname.is_empty() || 
       contact_req.email.is_empty() || 
       contact_req.subject.is_empty() || 
       contact_req.message.is_empty() {
        console_log!("Invalid request data: missing required fields");
        return json_response(400, &serde_json::json!({
            "success": false,
            "message": "Missing required fields"
        }));
    }

    // Get environment variables and secrets
    let contact_email = match env.var("CONTACT_EMAIL_ADDRESS") {
        Ok(var) => var.to_string(),
        Err(e) => {
            console_error!("Failed to get CONTACT_EMAIL_ADDRESS: {}", e);
            return json_response(500, &serde_json::json!({
                "success": false,
                "message": "Server configuration error"
            }));
        }
    };

    let discord_webhook_url = match env.secret("DISCORD_EMAIL_WEBHOOK_URL") {
        Ok(secret) => secret.to_string(),
        Err(e) => {
            console_error!("Failed to get DISCORD_EMAIL_WEBHOOK_URL: {}", e);
            return json_response(500, &serde_json::json!({
                "success": false,
                "message": "Server configuration error"
            }));
        }
    };

    let smtp_api_key = match env.secret("SMTP_API_KEY") {
        Ok(secret) => secret.to_string(),
        Err(e) => {
            console_error!("Failed to get SMTP_API_KEY: {}", e);
            return json_response(500, &serde_json::json!({
                "success": false,
                "message": "Server configuration error"
            }));
        }
    };

    // Send to Discord webhook
    let discord_result = send_discord_notification(&contact_req, &discord_webhook_url).await;
    
    // Send email notification
    let email_result = send_email_notification(&contact_req, &contact_email, &smtp_api_key).await;

    // Check for errors
    if let Err(e) = discord_result {
        console_error!("Discord notification error: {}", e);
        return json_response(500, &serde_json::json!({
            "success": false,
            "message": "Failed to send Discord notification"
        }));
    }

    if let Err(e) = email_result {
        console_error!("Email notification error: {}", e);
        return json_response(500, &serde_json::json!({
            "success": false,
            "message": "Failed to send email notification"
        }));
    }

    // Return success response with CORS headers
    let mut response = json_response(200, &serde_json::json!({
        "success": true,
        "message": "Contact request processed successfully"
    }))?;
    
    // Add CORS headers
    response.headers_mut().set("Access-Control-Allow-Origin", "https://aadityachapagain.com")?;
    
    Ok(response)
}