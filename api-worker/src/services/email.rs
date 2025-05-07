use worker::*;
use crate::models::contact::*;

pub async fn send_email_notification(
    contact_req: &ContactRequest, 
    to_email: &str, 
    api_key: &str
) -> Result<()> {
    let email_data = EmailData {
        from: format!("{} <{}>", contact_req.fullname, contact_req.email),
        to: vec![to_email.to_string()],
        reply_to: contact_req.email.clone(),
        subject: contact_req.subject.clone(),
        html: format!("<html><body>{}</body></html>", contact_req.message),
    };

    let email_json = match serde_json::to_string(&email_data) {
        Ok(json) => json,
        Err(e) => return Err(format!("Failed to serialize email data: {}", e).into()),
    };

    let mut headers = Headers::new();
    headers.set("Content-Type", "application/json")?;
    headers.set("Authorization", &format!("Bearer {}", api_key))?;

    let request = Request::new_with_init(
        "https://api.resend.com/emails",
        RequestInit::new()
            .with_method(Method::Post)
            .with_headers(headers)
            .with_body(Some(email_json.into())),
    )?;

    let mut response = Fetch::Request(request).send().await?;

    if !response.status_code() == 200 {
        let text = response.text().await?;
        return Err(format!("Email API error: {} - {}", response.status_code(), text).into());
    }

    Ok(())
}