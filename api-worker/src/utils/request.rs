use axum::{
    extract::State,
    http::Request,
};
use crate::AppState;

// Check if request is coming from allowed origin
pub fn is_valid_origin(req: &Request<axum::body::Body>) -> bool {
    match req.headers().get("Origin") {
        Some(origin) => {
            let origin_str = origin.to_str().unwrap_or_default();
            origin_str == "https://aadityachapagain.com"
        },
        None => false,
    }
}

// Extract environment variable
pub async fn get_env_var(state: &State<AppState>, name: &str) -> Result<String, String> {
    match state.env.var(name) {
        Ok(var) => Ok(var.to_string()),
        Err(_) => Err(format!("Environment variable {} not found", name)),
    }
}

// Extract secret
pub async fn get_secret(state: &State<AppState>, name: &str) -> Result<String, String> {
    match state.env.secret(name) {
        Ok(secret) => Ok(secret.to_string()),
        Err(_) => Err(format!("Secret {} not found", name)),
    }
}