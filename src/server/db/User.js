const clientDB = require('client');

module.exports = class User 
{
    constructor(collection) {
        this.collection = collection;
    }

    getUsers() {
        clientDB(db => {
            let invetory = db.collection('inventory').find({});
            invetory.forEach(doc => {
                console.log(doc.item);
                tesst = doc.item;
            }, err => {console.log(err)});
        });
    }
}