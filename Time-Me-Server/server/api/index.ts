import { Router } from 'express'
const router = Router()

router.use('/firebase', require('./firebaseRoutes'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  next(error)
})

module.exports = router
