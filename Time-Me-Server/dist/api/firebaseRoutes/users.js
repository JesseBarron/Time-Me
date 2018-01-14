"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const { admin, firebaseDB, usersFB } = require('../../firebaseSource');
router.get('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const users = yield firebaseDB.ref('/users/').once('value');
        console.log(users);
        res.send(users);
    }
    catch (err) {
        next(err);
    }
}));
router.get('/:userId', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const user = yield usersFB.child(userId);
        res.send(user);
    }
    catch (err) {
        console.log(err);
        next(err);
    }
}));
router.post('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const { firstName, lastName, email, routines, journal } = req.body;
    const userInfo = {
        firstName,
        lastName,
        email,
        routines: routines || [],
        journal: routines || []
    };
    try {
        const userId = yield admin.auth().createUser({ email });
        const newUser = yield usersFB.child(userId.uid).set(userInfo);
        console.log(newUser, 'newUser');
        res.send('ok');
    }
    catch (err) {
        next(err);
    }
}));
router.delete('/:userId', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        yield usersFB.child(userId).remove();
        yield admin.auth().deleteUser(userId);
        res.send('user Deleted');
    }
    catch (err) {
        console.log(err);
        next(err);
    }
}));
router.use((req, res, next) => {
    const err = new Error('Not Found');
    next(err);
});
module.exports = router;
