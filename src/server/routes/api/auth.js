const express = require('express');
const router = express.Router();

// Middlewares (controllers)
const auth = require('../../middleware/auth');


/*
*
* Authentifications System Routes 
*
********************/


router.get('/', (req, res) => {

    res.json({
        mgs: "hello from api auth root level"
    })

});


//
// Registration system route
//

router.post('/register', 

    // Check incoming datas
    auth.checkDatas,

    // Registration process with Auth Entities
    auth.registration,

    (req, res) => {

        res.json({
            msg: "user registred succesfuly",
            user: res.locals.newUser
        });

});



router.post('/login',

    // Check incoming datas
    auth.checkDatas,

    // Login User
    auth.login,

    // Generate JSON WEB Token and set it in Autorization header
    auth.jwtGenerate,

    (req, res) => {

        res.json({

            msg: "user logged succesfuly",

            // Object of user actually connected
            user: res.locals.currentUser

        });
    }
);


module.exports = router;