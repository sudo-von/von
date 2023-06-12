import amqp from 'amqplib';

async function connectQueue() {
  try {
    const connection = await amqp.connect('amqp://localhost:5672');
    const channel = await connection.createChannel();

    await channel.assertQueue('Profile:CreateProfile');

    channel.consume('Profile:CreateProfile', (data) => {
      if (data) {
        console.log(`${Buffer.from(data.content)}`);
        channel.ack(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

connectQueue();
