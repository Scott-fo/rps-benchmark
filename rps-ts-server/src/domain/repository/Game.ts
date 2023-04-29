import { Move } from "../Move";
import { Result } from "../Result";

export interface IGame {
    play(player1Move: Move, player2Move: Move): Result;
}
