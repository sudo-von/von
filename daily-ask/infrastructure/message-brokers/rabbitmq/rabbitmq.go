package rabbitmq

import (
	"context"
	"log"
	"time"

	amqp "github.com/rabbitmq/amqp091-go"
)

type RabbitMQ struct {
	conn             *amqp.Connection
	MessageBrokerUrl string
}

func (r *RabbitMQ) Connect() {
	conn, err := amqp.Dial(r.MessageBrokerUrl)
	if err != nil {
		log.Panicf("failed to connect to the message broker: %s", err.Error())
	}
	r.conn = conn
}

func (r *RabbitMQ) ProduceMessage(queue string, body []byte) {
	ch, err := r.conn.Channel()
	if err != nil {
		log.Panicf("can not create message broker channel: %s", err.Error())
	}
	defer ch.Close()

	q, err := ch.QueueDeclare(queue, false, false, false, false, nil)
	if err != nil {
		log.Panicf("can not declare message broker queue: %s", err.Error())
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	err = ch.PublishWithContext(ctx, "", q.Name, false, false, amqp.Publishing{ContentType: "text/plain", Body: body})
	if err != nil {
		log.Panicf("failed to send message broker message: %s", err.Error())
	}
}
