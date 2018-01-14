const admin = require('firebase-admin');
const serviceAccount = process.env.NODE_ENV != 'development'
    ? process.env.FIREBASE_SECRET
    : require('../../firebaseSecret.json');
console.log(process.env.FIREBASE_DB_URL, "FIREBASE_DB_URL");
const dbUrl = process.env.FIREBASE_DB_URL;
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: dbUrl
});
const firebaseDB = admin.database();
const usersFB = firebaseDB.ref('/users/');
module.exports = {
    admin,
    firebaseDB,
    usersFB
};
