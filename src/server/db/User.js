const clientDB = require('./client');

module.exports = class User 
{
    constructor(collection) {
        this.collection = collection;
    }

    getUsers() {
        clientDB(db => {
            let collection = db.collection(this).find({});
            collection.forEach(doc => {
                console.log(doc.item);
                tesst = doc.item;
            }, err => {console.log(err)});
        });
    }


    // Asserted that infos are checked yet via a middleware on route layer
    // [Middleware File]
    static addUser(req, res, next) {
        clientDB(db => {
            db.collection("users").insertOne({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password // serialize later
            }, function(err, r){
                console.log(r);
                res.locals.result = r;
                next();
            })
            // Promise methode

            // .then(result => {
            //     console.log(result);
            //     res.locals.result = 'reussi';
            // })
        });
    }
}