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

router.post('/register', checkUserDatas, (req, res) => {
    // middleware to verify integrity of incoming datas
    console.log('hello from register route');
    res.json(req.body);
});

// 
// To server.js
// 
module.exports = router;