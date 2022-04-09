const amqp = require("amqplib/callback_api");

function queue_post(req, res) {
  try {
    //connect
    amqp.connect("amqp://localhost", (connError, connection) => {
      if (connError) {
        throw connError;
      }
      //create channel
      connection.createChannel((channelError, channel) => {
        if (channelError) {
          throw channelError;
        }
        //check if queue is present else create new
        const QUEUE = process.env.QUEUE;
        const Message = JSON.stringify(req.body);
        channel.assertQueue(QUEUE);
        //send message to queue
        channel.sendToQueue(QUEUE, Buffer.from(Message));
        console.log(`==== Message sent to ${QUEUE} queue====`);
        //close the terminal after sent
        setTimeout(() => {
          connection.close();
        }, 1000);
      });
    });
    return res.status(200).send("Post queued");
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
module.exports = {
  queue_post,
};
