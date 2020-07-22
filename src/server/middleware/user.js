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

    updateB: (req, res, next) => {

        var userID = req.body.newUserInstance._id;
        var newBibliotheque = req.body.newUserInstance.TwoCoffees.Bibliotheque
        
        console.log('in updateB middleware', newBibliotheque)

        User.updateB(userID, newBibliotheque)
            .then(res => {
                next();
            })
            .catch(err => {

                console.log('in updateB Middleware', err);
                res.send(403, err)

            })
    },
}