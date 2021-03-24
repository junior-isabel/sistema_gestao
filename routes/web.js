const router = require('express').Router()

const indexController = require('../controllers/indexController')
const authenticateController = require('../controllers/authenticateController')
const painelController = require('../controllers/painelController')





router.get('/', indexController.index)
router.get('/accounts', indexController.create)
router.get('/painel', painelController.index)

router.post('/authenticate', authenticateController.login)


module.exports = router