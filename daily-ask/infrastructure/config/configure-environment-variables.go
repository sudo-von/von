package config

import (
	"fmt"
	"log"
	"os"
	"path"

	"github.com/joho/godotenv"
)

type EnvironmentVariables struct {
	DatabaseUrl      string
	DatabaseName     string
	DatabaseUsername string
	DatabasePassword string
	MessageBrokerUrl string
}

func getEnvironmentVariable(name string) string {
	environmentVariable := os.Getenv(name)
	if environmentVariable == "" {
		log.Panicf("%s is not defined", name)
	}
	return environmentVariable
}

func ConfigureEnvironmentVariables() (*EnvironmentVariables, error) {
	dir, err := os.Getwd()
	if err != nil {
		return nil, err
	}

	err = godotenv.Load(path.Join(dir, ".env"))
	if err != nil {
		return nil, fmt.Errorf("failed to load .env file: %s", err.Error())
	}

	databaseName := getEnvironmentVariable("DATABASE_NAME")
	databaseHost := getEnvironmentVariable("DATABASE_HOST")
	databasePort := getEnvironmentVariable("DATABASE_PORT")
	databaseUsername := getEnvironmentVariable("DATABASE_USERNAME")
	databasePassword := getEnvironmentVariable("DATABASE_PASSWORD")
	messageBrokerHost := getEnvironmentVariable("MESSAGE_BROKER_HOST")
	messageBrokerPort := getEnvironmentVariable("MESSAGE_BROKER_PORT")

	databaseUrl := fmt.Sprintf("%s:%s", databaseHost, databasePort)
	messageBrokerUrl := fmt.Sprintf("%s:%s", messageBrokerHost, messageBrokerPort)

	return &EnvironmentVariables{
		DatabaseUrl:      databaseUrl,
		DatabaseName:     databaseName,
		DatabaseUsername: databaseUsername,
		DatabasePassword: databasePassword,
		MessageBrokerUrl: messageBrokerUrl,
	}, nil
}
