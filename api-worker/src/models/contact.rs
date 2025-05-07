use serde::{Deserialize, Serialize};

#[derive(Deserialize, Debug)]
pub struct ContactRequest {
    pub fullname: String,
    pub email: String,
    pub subject: String,
    pub message: String,
}

#[derive(Serialize)]
pub struct ApiResponse {
    pub success: bool,
    pub message: String,
}

#[derive(Serialize)]
pub struct DiscordEmbed {
    pub title: String,
    pub color: u32,
    pub fields: Vec<DiscordField>,
    pub timestamp: String,
    pub footer: DiscordFooter,
}

#[derive(Serialize)]
pub struct DiscordField {
    pub name: String,
    pub value: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub inline: Option<bool>,
}

#[derive(Serialize)]
pub struct DiscordFooter {
    pub text: String,
}

#[derive(Serialize)]
pub struct DiscordPayload {
    pub embeds: Vec<DiscordEmbed>,
}

#[derive(Serialize)]
pub struct EmailData {
    pub from: String,
    pub to: Vec<String>,
    pub reply_to: String,
    pub subject: String,
    pub html: String,
}