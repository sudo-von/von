package main

import (
	"fmt"
	"log"

	"github.com/sudo-von/daily-ask/infrastructure/config"
)

func main() {
	environmentVariables, err := config.ConfigureEnvironmentVariables()
	if err != nil {
		log.Panic(err)
	}

	fmt.Println(environmentVariables)
}
