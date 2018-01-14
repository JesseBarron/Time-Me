import { Router } from 'express'
const router = Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/routines', require('./routines'))

router.use((req, res, bext) => {
  const err = new Error('Not Found')
})
