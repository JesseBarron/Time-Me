"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
module.exports = router;
router.use('/users', require('./users'));
router.use('/routines', require('./routines'));
router.use((req, res, bext) => {
    const err = new Error('Not Found');
});
