use worker::*;
use serde::Serialize;

// Create a JSON response with the given status code
pub fn json_response<T: Serialize>(status: u16, data: &T) -> Result<Response> {
    let body = match serde_json::to_string(data) {
        Ok(json) => json,
        Err(e) => return Response::error(format!("Failed to serialize response: {}", e), 500),
    };
    
    let mut headers = Headers::new();
    headers.set("Content-Type", "application/json")?;
    
    let response = Response::ok(body)?
        .with_status(status)
        .with_headers(headers);
    
    Ok(response)
}