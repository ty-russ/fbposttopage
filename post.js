const express = require("express");
const router = express.Router();
const axios = require("axios");
const pageid = process.env.PAGE_ID;
const pageaccesstoken = process.env.FB_TOKEN;
const publisher = require("./sender");

router.post("/posttopage", async (req, res) => {
  const text = req.body.text;
  const img = req.body.img;
  let response = await axios
    .post(`https://graph.facebook.com/${pageid}/photos?url=${img}?&message=${text}&access_token=${pageaccesstoken}`, null)
    .then(function (res) {
      console.log(`++++ ${res} ++++`);
      return res;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
  console.log(response);
  return res.json(response.data);
});

router.post("/topostqueue", publisher.queue_post);

module.exports = router;
