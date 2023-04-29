package domain

type Result int

const (
	Draw Result = iota
	Player1Wins
	Player2Wins
)

func (r Result) String() string {
	switch r {
	case Draw:
		return "Draw"
	case Player1Wins:
		return "Player 1 Wins"
	case Player2Wins:
		return "Player 2 Wins"
	default:
		return "Unknown Result"
	}
}
