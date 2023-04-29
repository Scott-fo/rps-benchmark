package repository

import "rock-paper-scissors/internal/app/domain"

type IGame interface {
	DetermineWinner(player1 domain.Move, player2 domain.Move) string
}
