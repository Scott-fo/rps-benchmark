package infrastructure

import (
	"net/http"
	"rock-paper-scissors/internal/app/application/usecase"
	"rock-paper-scissors/internal/app/domain"

	"github.com/gin-gonic/gin"
)

type GameRequest struct {
	Player1Move domain.Move `json:"player1_move"`
	Player2Move domain.Move `json:"player2_move"`
}

type GameResponse struct {
	Winner string `json:"winner"`
}

type Controller struct{}

var (
	gameServer = domain.Game{}
)

func Router() *gin.Engine {
	r := gin.Default()
	ctrl := Controller{}
	r.POST("/game", ctrl.newGame)

	return r
}

func (ctrl Controller) newGame(c *gin.Context) {
	var req GameRequest
	if err := c.BindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	args := usecase.RunGameArgs{
		Player1Move:    req.Player1Move,
		Player2Move:    req.Player2Move,
		GameRepository: &gameServer,
	}

	winner := usecase.RunGame(args)
	c.JSON(http.StatusOK, GameResponse{Winner: winner})
}
