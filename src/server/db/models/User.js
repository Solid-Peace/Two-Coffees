const clientDB = require('../client');

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
    static addUser(user) {
        return new Promise((resolve, reject) => {
            clientDB(db => {
                db.collection("users").insertOne({
                    username: user.username,
                    email: user.email,
                    password: user.password // serialize later
                }, function(err, r){
                    if(r){
                        resolve(r)
                    }else{
                        reject(err)
                    }
                })
            });
        
            // Promise methode

            // .then(result => {
            //     console.log(result);
            //     res.locals.result = 'reussi';
            // })
        });
    }

    static allUser(username, password) {
        return new Promise((resolve, reject) => {
            clientDB(db => {
                cursor = db.collection("users").findOne({ 
                    username: username,
                    password: password
                });

                cursor.toArray((err, docs) => {
                    if(err){
                        console.log(err);
                        reject(err);
                    }

                    if(docs){
                        console.log("users retrieved", docs[0]);
                        resolve(docs[0]);
                    }
                });
            });
        });
    }
}