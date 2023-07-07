package message_broker

type MessageBroker interface {
	Connect()
	ProduceMessage(queue string, body []byte)
}
