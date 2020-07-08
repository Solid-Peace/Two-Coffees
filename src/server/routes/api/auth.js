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
// Registration logic && route
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
        }
    );
});


//
// Login logic && route
//
router.post('/login',

    // Check credentials integrity
    auth.checkDatas,

    // Check if user exist
    auth.login,

    // Generate JSON WEB Token based on email
    auth.jwtGenerate,

    (req, res) => {
        
        console.log('in /login', res.locals.token);

        // Then send it
        res.json({
            authToken: res.locals.token
        });
    }
);


module.exports = router;