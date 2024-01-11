const Router = require('express')
const router = new Router()

const jewelryRouter = require('./jewelryRouter')
const userRouter = require('./userRouter')
const materialRouter = require('./materialRouter')
const typeRouter = require('./typeRouter')

router.use('/user',userRouter)
router.use('/type',typeRouter)
router.use('/material',materialRouter)
router.use('/jewelry',jewelryRouter)

module.exports = router