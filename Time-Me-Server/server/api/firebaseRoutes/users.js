const router = require('express').Router()
const { admin, firebaseDB, usersFB } = require('../../firebaseSource')

router.get('/', async (req, res, next) => {
  try {
    const users = await firebaseDB.ref('/users/').once('value')
    console.log(users)
    res.send(users)
  } catch(err){
    next(err)
  }
})

router.get('/:userId', async (req, res, next) => {
  try{
    const userId = req.params.userId
    const user = await usersFB.child(userId)
    res.send(user)
  } catch(err) {
    console.log(err)
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const { firstName, lastName, email, routines, journal } = req.body

  const userInfo = {
    firstName,
    lastName,
    email,
    routines: routines || [],
    journal: routines || []
  }
  try {
    const userId = await admin.auth().createUser({email})
    const newUser = await usersFB.child(userId.uid).set(userInfo)
    console.log(newUser, 'newUser')
    res.send('ok')
  } catch(err) {
    next(err)
  }
})

router.delete('/:userId', async (req, res, next) => {
  const { userId } = req.params
  try{
    await usersFB.child(userId).remove()
    await admin.auth().deleteUser(userId)
    res.send('user Deleted')
  } catch(err) {
    console.log(err)
    next(err)
  }
})

router.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

module.exports = router
