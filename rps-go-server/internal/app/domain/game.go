package domain

type Game struct{}

func (g *Game) DetermineWinner(player1 Move, player2 Move) string {
	if player1 == player2 {
		return Draw.String()
	}

	switch player1 {
	case Rock:
		if player2 == Scissors {
			return Player1Wins.String()
		}
	case Paper:
		if player2 == Rock {
			return Player1Wins.String()
		}

	case Scissors:
		if player2 == Paper {
			return Player1Wins.String()
		}
	}

	return Player2Wins.String()
}
