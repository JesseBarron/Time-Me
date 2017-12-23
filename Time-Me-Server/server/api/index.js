const router = require('express').Router()

router.use('/firebase', require('./firebaseRoutes'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
