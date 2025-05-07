use worker::*;
use crate::utils::response::json_response;

// Health check endpoint
pub async fn health_check() -> Result<Response> {
    json_response(200, &serde_json::json!({
        "success": true,
        "message": "API is running!"
    }))
}