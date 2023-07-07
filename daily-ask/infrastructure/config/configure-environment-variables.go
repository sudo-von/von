package config

import (
	"errors"
	"fmt"
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

func ConfigureEnvironmentVariables() (*EnvironmentVariables, error) {
	dir, err := os.Getwd()
	if err != nil {
		return nil, err
	}

	err = godotenv.Load(path.Join(dir, ".env"))
	if err != nil {
		return nil, errors.New(".env file was not found")
	}

	databaseName := os.Getenv("DATABASE_NAME")
	if databaseName == "" {
		return nil, errors.New("DATABASE_NAME is not defined")
	}

	databaseHost := os.Getenv("DATABASE_HOST")
	if databaseHost == "" {
		return nil, errors.New("DATABASE_HOST is not defined")
	}

	databasePort := os.Getenv("DATABASE_PORT")
	if databasePort == "" {
		return nil, errors.New("DATABASE_PORT is not defined")
	}

	databaseUsername := os.Getenv("DATABASE_USERNAME")
	if databaseUsername == "" {
		return nil, errors.New("DATABASE_USERNAME is not defined")
	}

	databasePassword := os.Getenv("DATABASE_PASSWORD")
	if databasePassword == "" {
		return nil, errors.New("DATABASE_PASSWORD is not defined")
	}

	messageBrokerHost := os.Getenv("MESSAGE_BROKER_HOST")
	if messageBrokerHost == "" {
		return nil, errors.New("MESSAGE_BROKER_HOST is not defined")
	}

	messageBrokerPort := os.Getenv("MESSAGE_BROKER_PORT")
	if messageBrokerPort == "" {
		return nil, errors.New("MESSAGE_BROKER_PORT is not defined")
	}

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
