package config

import (
	message_broker "github.com/sudo-von/daily-ask/infrastructure/message-brokers"
	"github.com/sudo-von/daily-ask/infrastructure/message-brokers/rabbitmq"
)

func ConfigureMessageBrokers(messageBrokerUrl string) {
	createQuestionProducer := rabbitmq.RabbitMQ{
		MessageBrokerUrl: messageBrokerUrl,
	}

	createQuestionProducer.Connect()

	createQuestionProducer.ProduceMessage(message_broker.CreateQuestionQueue, []byte("sasas"))
}
