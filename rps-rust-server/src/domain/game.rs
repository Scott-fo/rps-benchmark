use super::game_move::Move;
use super::game_result::Result;

pub fn determine_winner(player1_move: &Move, player2_move: &Move) -> Result {
    use self::Move::*;
    use self::Result::*;

    match (player1_move, player2_move) {
        (Rock, Scissors) | (Paper, Rock) | (Scissors, Paper) => Player1Wins,
        (Scissors, Rock) | (Rock, Paper) | (Paper, Scissors) => Player2Wins,
        _ => Draw,
    }
}
