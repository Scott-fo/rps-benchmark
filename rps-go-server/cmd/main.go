package main

import (
	"rock-paper-scissors/internal/app/infrastructure"
)

func main() {
	r := infrastructure.Router()
	r.Run(":8080")
}
