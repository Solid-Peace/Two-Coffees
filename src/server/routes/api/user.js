const express = require('express');
const router = express.Router();
const User = require('../../db/User');

const checkUserDatas = require('../../middleware/checkUserDatas');

// 
// User Routes
// 
router.get('/', (req, res) => {
    res.json({  
        db: {
            mgs : "ok"
        }
    });
});

router.post('/register',
    // middleware to verify integrity of incoming datas
    checkUserDatas.register,
    User.addUser,
    (req, res) => {
    console.log('hello from register route');
    console.log(res.locals.result);
    res.json({
        msg: res.locals.result,
        test: 'ok'
    });
});

router.post('/login',
    // middleware to verify integrity of incoming datas
    checkUserDatas.login,
    (req, res) => {
    console.log('hello from login route');
    res.json(req.body);
});

// 
// To server.js
// 
module.exports = router;