const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = "mongodb+srv://Solid:Nartfsdq*90@cluster0-gsbne.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(url, { useNewUrlParser: true });


module.exports = function(callback) {
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);

    const db = client.db("test");
    callback(db);
    
    client.close();
  });  
}