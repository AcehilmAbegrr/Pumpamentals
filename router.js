const express = require('express')
const router = express.Router()
const service = require('./service')

router.post("/hook", (req, res) => {
    console.log(req.body)
    res.status(200).end()
})

router.get("/trending", async (req, res) => {
    const trendingTokensCG = await service.getTrendingCoinGecko()
    console.log(trendingTokensCG)
    res.send(trendingTokensCG)
    res.status(200).end()
})

module.exports = router