const amqp = require("amqplib/callback_api");
const axios = require("axios");

require("dotenv").config();
const pageid = process.env.PAGE_ID;
const pageaccesstoken = process.env.FB_TOKEN;

function subscribe_queue() {
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
        channel.assertQueue(QUEUE);
        //recieve message
        channel.consume(
          QUEUE,
          async (msg) => {
            let message = JSON.parse(msg.content.toString());

            console.log(`=== Message recieved ${message.text} =======`);

            let postResponse = await post(message);
            console.log("==SUBSCRIBER RESPONSE===", postResponse.data);
            if (postResponse.status === 200 && postResponse.statusText === "OK") {
              console.log("===acknowledging ====");
              channel.ack(msg);
            }
          }

          //   {
          //     //acknoledge message recieved
          //     noAck: true,
          //   }
        );
      });
    });
    console.log("======subscriber listening to Queue ======");
  } catch (err) {
    console.log(err);
  }
}

async function post(message) {
  const text = message.text;
  const img = message.img;

  let response = await axios
    .post(`https://graph.facebook.com/${pageid}/photos?url=${img}?&message=${text}&access_token=${pageaccesstoken}`, null)
    .then(function (res) {
      return res;
    })
    .catch(function (error) {
      console.log(error.data);
      return error;
    });

  return response;
}

module.exports = {
  subscribe_queue,
};
