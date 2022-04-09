const express = require("express");

const bodyParser = require("body-parser");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();
const fbPostRoutes = require("./post");
const subscriber = require("./reciever");
subscriber.subscribe_queue();
//support parsing application/json post data
app.use(bodyParser.json());
//support parsing application/x-wwww-form-url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", fbPostRoutes);

app.listen(PORT || 3000, () => {
  console.log(`Server started at ${PORT}`);
});
