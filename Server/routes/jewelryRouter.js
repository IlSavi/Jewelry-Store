const Router = require('express')
const router = new Router()
const jewelryController = require('../controllers/jewelryController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), jewelryController.create)
router.get('/',jewelryController.getAll)
router.get('/:id',jewelryController.getOne)

module.exports = router