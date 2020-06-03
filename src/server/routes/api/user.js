const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({ msg: "hello from user API"}));

router.post('/register', (req, res) => res.json(req.body));

module.exports = router;