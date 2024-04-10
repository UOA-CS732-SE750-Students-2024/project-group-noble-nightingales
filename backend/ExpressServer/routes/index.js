var express = require('express');
var router = express.Router();
const axios = require('axios')

router.post('/steam-news', (req,res,next) => {
  const count = req.body.count
  const appid = req.body.appid

  axios.get(`https://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}&count=${count}&maxlength=500&format=json`)
  .then(response => {
    res.send(response.data)
  })
})

module.exports = router;
