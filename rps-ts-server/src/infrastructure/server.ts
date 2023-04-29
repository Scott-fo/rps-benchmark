import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import { Game } from "../application/usecase/RunGame";
import { Move } from "../domain/Move";
import cluster, { Worker } from "cluster";
import os from "os";
import { createServer } from "http";

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;
const game = new Game();

app.post("/game", playGame);

if (cluster.isPrimary) {
    const cpuCount = os.cpus().length;
    for (let i = 0; i < cpuCount; ++i) {
        cluster.fork();
    }

    cluster.on("listening", (worker: Worker) => {
        console.log(`Worker: ${worker.process.pid} listening`);
    })

    cluster.on("exit", (worker: Worker) => {
        console.log(`Worker: ${worker.process.pid} exited`);
    })
} else {
    const server = createServer(app);
    server.listen(PORT, () => {
        console.log(`Server running on: ${PORT}`);
    })
}

function playGame(req: Request, res: Response) {
    const player1Move = req.body.player1_move as Move;
    const player2Move = req.body.player2_move as Move;

    const result = game.play(player1Move, player2Move);

    res.json({ result });
}
