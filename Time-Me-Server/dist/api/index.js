"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.use('/firebase', require('./firebaseRoutes'));
router.use((req, res, next) => {
    const error = new Error('Not Found');
    next(error);
});
module.exports = router;
