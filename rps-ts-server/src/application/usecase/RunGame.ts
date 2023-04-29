import { determineWinner } from "../../domain/Game";
import { Move } from "../../domain/Move";
import { Result } from "../../domain/Result";
import { IGame } from "../../domain/repository/Game";

export class Game implements IGame {
    play(player1Move: Move, player2Move: Move): Result {
        return determineWinner(player1Move, player2Move);
    }
}
