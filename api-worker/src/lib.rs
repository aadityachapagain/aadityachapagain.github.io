use worker::*;

mod routes;
mod services;
mod models;
mod utils;

// Export modules for easier imports
// pub use routes::*;
// pub use services::*;
// pub use models::*;
// pub use utils::*;

#[event(fetch)]
pub async fn main(req: Request, env: Env, _ctx: worker::Context) -> Result<Response> {
    console_error_panic_hook::set_once();

    // Add CORS headers for preflight requests
    if req.method() == Method::Options {
        let mut headers = Headers::new();
        headers.set("Access-Control-Allow-Origin", "https://aadityachapagain.com")?;
        headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")?;
        headers.set("Access-Control-Allow-Headers", "Content-Type")?;
        return Ok(Response::empty()?.with_headers(headers).with_status(204));
    }

    // Extract the URL path
    let path = req.path();
    
    // Basic router
    match (req.method(), path.as_str()) {
        // Health check endpoint
        (Method::Get, "/") | (Method::Get, "/v1") => {
            routes::health::health_check().await
        },
        
        // Contact endpoint
        (Method::Post, "/v1/contact/email-notification") => {
            routes::contact::handle_contact(req, env).await
        },
        
        // 404 for everything else
        _ => {
            Response::error("Not Found", 404)
        }
    }
}