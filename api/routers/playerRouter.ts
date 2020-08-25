const { Router } = require('express')

const router = Router()

const playerController = require('../controllers/playerController')

router.get('/players', playerController.players)
router.get('/player/:name', playerController.player)

module.exports = router