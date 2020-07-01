const User = require('../db/models/User');
const Auth = require('../db/models/Auth');
// const jwt = require('jsonwebtoken');

/*
*
*  Authentifiaction process
*
*/

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

        User.allUser(username, password).then( value => {

            console.log('in login middleware then', value);
            next();
        
        }).catch(err => {
            
            console.log(err);
            res.sendStatus(401);

        });
    },


    checkDatas: (req, res, next) => {

        // Send 401 status if datas aren't corrects

        // Data traitment is depending on route request from
            
        // true replaces the function will checks datas

    
        if(true && req.path.includes("register")){

            console.log('test register');

            res.locals.newUser = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            }

            next();
            
        }else if(true && req.path.includes("login")){

            console.log('test login');

            res.locals.currentUser = {
                email: req.body.email,
                password: req.body.password,
            }

            next();

        }else{

            console.log('bug');
            res.status(401).send('data aren\'t correct');
        } 
    },

    registration: (req, res, next) => {

        // Promise which is resolved if Auth.registration return true

        Auth.registration(res.locals.newUser)
            .then( () => {

                console.log('in Auth middleware', res.locals.newUser.username + ' is registrated');
                next();

            })
            .catch( err => {

                console.log('In auth middleware', err);
                res.status(404).send(err);
            
        });
    },



    login: (req, res, next) => {
        
        // Like Registration above, login return promise which checks if user exist in database, through Auth Model
        
        Auth.login(res.locals.currentUser)
            .then( result => {
                
                console.log('in Auth middleware', result.username + ' is found');

                // We Passing the returned result of database
                res.locals.currentUser = result;

                next();

            })
            .catch( err => {

                console.log('In auth middleware', err);
                res.status(404).send(err);

        });
    },

    jwtGenerate: (req, res, next) => {

        // Generate an access token
        const accessToken = Auth.jwt.sign({ username: res.locals.currentUser.username }, Auth.accessTokenSecret);

        // Modify Header
        res.set('Authorization', `Bearer ${accessToken}`);
        next();

    },

    authenticateJWT: (req, res,next) => {

        // This function check if browser client have an JWT

        const autHeader = req.headers.authorization;

        if (autHeader) {
            
            // Just take the token, not 'baerer' string
            const token = autHeader.split(' ')[1];

            Auth.jwt.verify(
                token
                , Auth.accessTokenSecret
                , (err, user) => {

                    // 'user' parameters callback is the payload of the jwt
                    
                    if (err) {

                        // If secret key not correspond, we return an error and redirect to login page
                        return res.redirect(403, '/');

                    }

                    // Else we get the object of the actual user thanks to playload datas
                    req.locals.user = user;

                    // And redirect to /home page of the user
                    return res.redirect(200, '/home');
                }
            );

        }else{
            
            res.redirect('/');

        }
    },
}