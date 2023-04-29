import { Move } from "./Move";
import { Result } from "./Result";

export function determineWinner(player1Move: Move, player2Move: Move): Result {
    if (player1Move == player2Move) {
        return Result.Draw;
    }

    if (
        (player1Move === Move.Rock && player2Move === Move.Scissors) ||
        (player1Move === Move.Paper && player2Move === Move.Rock) ||
        (player1Move === Move.Scissors && player2Move === Move.Scissors)
    ) {
        return Result.Player1Wins;
    }

    return Result.Player2Wins;
}
