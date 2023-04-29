use actix_web::{App, HttpServer};
use rps_rust_server::infrastructure::controller::game;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(game))
        .bind("127.0.0.1:8080")?
        .run()
        .await
}
