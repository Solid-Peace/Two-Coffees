const User = require('../db/models/User');

module.exports = {

    getUser: (req, res, next) => {

        User.getUser(res.locals.jwtUser)
            .then( result => {

                console.log('in getUser middleware', result);

                res.locals.UserInstance = result;

                next();

            })
            .catch( err => 
                
                res.send(404, err) 
            )
    },

}