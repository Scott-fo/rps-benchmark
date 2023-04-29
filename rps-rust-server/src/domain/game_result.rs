use serde::Serialize;

#[derive(Debug, Serialize)]
pub enum Result {
    Draw,
    Player1Wins,
    Player2Wins,
}
