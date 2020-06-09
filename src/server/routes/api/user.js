const express = require('express');
const router = express.Router();
const User = require('../../db/User');


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

module.exports = router;