"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.use('/facebook', require('./facebook'));
router.use((req, res, next) => {
    const err = new Error('Not Found');
    next(err);
});
module.exports = router;
