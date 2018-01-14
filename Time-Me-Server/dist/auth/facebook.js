"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
if (!process.env.FACEBOOK_CLIENT_ID || !process.env.FACEBOOK_SECRET) {
    router.use((req, res, next) => {
        res.send('nope');
    });
}
console.log(process.env.FACEBOOK_CALLBACK, 'FB CALLBACK');
const facebookStratConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK
};
passport.use(new FacebookStrategy(facebookStratConfig, (accessToken, refToken, profile, done) => {
    console.log(profile, accessToken);
    return done(null, profile);
}));
router.get('/login', passport.authenticate('facebook'));
router.get('/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function (req, res) {
    res.redirect('exp://localhost:19000/+');
});
module.exports = router;
