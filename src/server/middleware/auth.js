const User = require('../db/User');

/*
*
*  Authentifiaction process
*
*/

const accessTokenSecret = "chuuuut";

module.exports = {

    register: (req, res, next) => {

        // Test 
        console.log('hello checkUserDatas');
        console.log(req.body);

        // Next if corresponde
        if (req.body.test == "true") {
            console.log('test ok : go next');

            // Recup User object, back-end side

            let user = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            };

            // If informations are correct, insert datas in db
            // Call User.addUser which return promise

            User.addUser(user).then( value => { 
                res.locals.result = value;
                
                next();
            }).catch(err => console.log(err));
            


        // Return error if not corresponde
        } else {
            res.json({
                msg: "error datas"
            })
        }
    },

    login: (req, res, next) => {
        // Test
        console.log('hello login checking data');
        const { username, password } = req.body;



    }
}

