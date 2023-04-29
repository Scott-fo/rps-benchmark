package usecase

import (
	"rock-paper-scissors/internal/app/domain"
	"rock-paper-scissors/internal/app/domain/repository"
)

type RunGameArgs struct {
	Player1Move    domain.Move
	Player2Move    domain.Move
	GameRepository repository.IGame
}

func RunGame(args RunGameArgs) string {
	return args.GameRepository.DetermineWinner(args.Player1Move, args.Player2Move)
}
