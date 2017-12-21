const admin = require('firebase-admin')
const serviceAccount = process.env.NODE_ENV != 'development'
               ? process.env.FIREBASE_SECRET
               : require('../../firebaseSecret.json')
const dbUrl = process.env.FIREBASE_DB_URL
              ? process.env.FIREBASE_DB_URL
              : require('../../secrets').FIREBASE_DB_URL
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: dbUrl
})

const firebaseDB = admin.database()

console.log(firebaseDB)