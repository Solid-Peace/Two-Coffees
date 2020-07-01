const User = require('../db/models/User');

module.exports = {

    getUser: (req, res, next) => {

        User.getUser(res.locals.user)
            .then( result => {

                console.log('in getUser middleware', result);

                res.locals.user = result;

                next();

            })
            .catch( err => res.send(404, err) );
    },

}