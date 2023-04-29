use crate::domain::{determine_winner, Move, Result};

pub fn run_game(player1_move: &i8, player2_move: &i8) -> Result {
    let player1_move = parse_move(player1_move);
    let player2_move = parse_move(player2_move);

    determine_winner(&player1_move, &player2_move)
}

fn parse_move(mv: &i8) -> Move {
    match mv {
        0 => Move::Rock,
        1 => Move::Paper,
        2 => Move::Scissors,
        _ => panic!("Invalid Move"),
    }
}
