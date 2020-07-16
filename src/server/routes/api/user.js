const express = require('express');
const router = express.Router();
const userMiddleware = require('../../middleware/user');

//const auth = require('../../middleware/auth');

router.get('/home',

    // Get User object model thanks to jwt 
    userMiddleware.getUser,

    (req, res) => {

        console.log('in /home', res.locals.jwtUser);

        res.json({
            //user: res.locals.user,
            msg: 'Welcom in "two coffees please" !',
            UserInstance: res.locals.UserInstance
        });
    }
);

router.post('/updateB',

    // Middleware which fetch news data in DB
    userMiddleware.updateB,

    (req, res) => {
        
        res.json({
            msg: 'bibliotheque was updated',
        })

    }

);

module.exports = router;



// 
// User Routes
// 
// router.get('/', (req, res) => {
//     res.json({  
//         db: {
//             mgs : "ok"
//         }
//     });
// });

// Register Route

// router.post('/register',

//     // Verify Data and write in db
//     auth.register,

//     // User.addUser,
//     (req, res) => {

//         console.log('hello from register route');
//         console.log(res.locals.result);

//         res.json({
//             msg: res.locals.result,
//             test: 'ok'
//         });        
//     }
// );

// router.post('/login',
//     // middleware to verify integrity of incoming datas
//     auth.login,
//     (req, res) => {
//     console.log('hello from login route');
//     res.json(req.body);
// });

// // 
// // To server.js
// // 