use crate::application::usecase::run_game;
use actix_web::{post, web, HttpResponse};
use serde::Deserialize;

#[derive(Deserialize)]
pub struct Input {
    player1_move: i8,
    player2_move: i8,
}

#[post("/game")]
pub async fn game(input: web::Json<Input>) -> HttpResponse {
    let result = run_game(&input.player1_move, &input.player2_move);
    HttpResponse::Ok().json(result)
}
