const { Router } = require('express')

const router = Router()

const playersController = require('../controllers/playersController')

router.get('/players', playersController.players)
router.get('/player/:name', playersController.player)

module.exports = router