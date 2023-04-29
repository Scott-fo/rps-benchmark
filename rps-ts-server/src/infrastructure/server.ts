import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { Game } from "../application/usecase/RunGame";
import { Move } from "../domain/Move";

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
const game = new Game();

app.post("/game", playGame);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

function playGame(req: Request, res: Response) {
    const player1Move = req.body.player1_move as Move;
    const player2Move = req.body.player2_move as Move;

    const result = game.play(player1Move, player2Move);

    res.json({ result });
}
