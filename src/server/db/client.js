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

// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);

//   const db = client.db("test");
//   console.log(db);

  // db.collection('inventory').insertOne({
  //   item: "canvas",
  //   qty: 100,
  //   tags: ["cotton"],
  //   size: { h: 28, w: 35.5, uom: "cm" }
  // })
  // .then(function(result) {
  //   console.log(result);
  // });

//   client.close();
// });


// var mongoose = require('mongoose');
// mongoose.connect(url, {useNewUrlParser: true});

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('ok');
// });
// db.close();


// // Export callback to administrate models (see Models)
// module.exports = function(callback) {
//   MongoClient.connect(url, function(err, client) {
//     assert.equal(null, err);
  
//     const db = client.db("test");
//     // console.log(db);

//     callback(db);
  
//     // db.collection('inventory').insertOne({
//     //   item: "canvas",
//     //   qty: 100,
//     //   tags: ["cotton"],
//     //   size: { h: 28, w: 35.5, uom: "cm" }
//     // })
//     // .then(function(result) {
//     //   console.log(result);
//     // });
  
//     client.close();
//   });  
// }