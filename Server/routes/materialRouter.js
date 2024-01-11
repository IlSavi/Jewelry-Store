const Router = require('express')
const router = new Router()
const materialController = require('../controllers/materialController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/',checkRole('ADMIN'), materialController.create)
router.get('/',materialController.getAll)

module.exports = router