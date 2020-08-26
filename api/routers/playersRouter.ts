const { Router } = require('express')

const router = Router()

const playersController = require('../controllers/playersController')

router.get('/players', playersController.players)
router.get('/players/:name', playersController.getPlayer)

module.exports = router