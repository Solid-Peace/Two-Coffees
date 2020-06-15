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
    addUser(infos) {
        clientDB(db => {
            let collection = db.collection("users").insertOne({
                username: infos.username,
                email: infos.email,
                password: infos.password // serialize later
            })
        })
    }
}