const express = require('express');
const router = express.Router();
const User = require('../../db/User');

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

router.post('/register', (req, res) => {
    res.json(req.body);
});

// 
// To server.js
// 
module.exports = router;