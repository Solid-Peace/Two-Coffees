const express = require('express');
const router = express.Router();
const User = require('../../db/models/User');

//const auth = require('../../middleware/auth');

router.get('/home', (req, res) => {

    res.json({
        user: res.locals.user,
        msg: 'Welcom in "two coffees please" !'
    });

});




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