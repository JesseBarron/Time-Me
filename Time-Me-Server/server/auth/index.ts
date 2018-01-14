import { Router } from 'express'
const router = Router()

router.use('/facebook', require('./facebook'))

router.use((req, res, next) => {
  const err = new Error('Not Found')
  next(err)
})

module.exports = router
