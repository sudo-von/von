package main

import (
	"log"

	"github.com/sudo-von/daily-ask/infrastructure/config"
)

func main() {
	environmentVariables, err := config.ConfigureEnvironmentVariables()
	if err != nil {
		log.Panic(err)
	}

	config.ConfigureMessageBrokers(environmentVariables.MessageBrokerUrl)
}
