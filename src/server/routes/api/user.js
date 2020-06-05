const express = require('express');
const router = express.Router();
const clientDB = require('../../db/client');

router.get('/', (req, res) => {
    console.log(this);
    clientDB(db => {
        console.log(this);

        let invetory = db.collection('inventory').find({});
        console.log(invetory);

        invetory.forEach(doc => {
            console.log(doc.item);
        }, err => {console.log(err)});

        res.json({  
            db: {
                mgs : "ok"
            }
        });
    });
});

router.post('/register', (req, res) => {
    res.json(req.body);
});

module.exports = router;