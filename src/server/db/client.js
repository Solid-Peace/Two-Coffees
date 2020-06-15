const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const params = require('./parameters');
// 
// 
// Database Connection
// 
// 

const url = `mongodb+srv://Solid:${params.password}@cluster0-gsbne.mongodb.net/test?retryWrites=true&w=majority`;

const client = new MongoClient(url, { useNewUrlParser: true });


module.exports = function(callback) {
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);

    //Connection to test dabase, wait callback function display by Entities
    const db = client.db("test");
    callback(db);
    
    client.close();
  });  
}