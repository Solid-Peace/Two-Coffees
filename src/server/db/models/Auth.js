const clientDB = require('../client');
var assert = require('assert');

/*  
*
*   Authentification class that is model which centralized 
*   securing process and communicate with database
*
*******************/

module.exports = class Auth
{

    // Secret Key, JWT system Authentification
    static accessTokenSecret = "chuuut";
    
    static jwt = require('jsonwebtoken');
    
    static registration(userDatas) {

        console.log(userDatas);

        //
        // Promise static methode which resolve or reject 
        // depending on new user has been added
        //
        
        return new Promise((resolve, reject) => {

            clientDB(db => {

                db.collection("users").insertOne({
                    email: userDatas.email,
                    password: userDatas.password,
                    username: userDatas.username,
                    TwoCoffees: {
                        parameters: {},
                        Bibliotheque: {},
                    }

                }, function(err, r){
                    if(r){
                        resolve(r)
                    }else{
                        reject(err)
                    }
                })
            });

        });
    }

    static login(currentUserDatas) {

        return new Promise((resolve, reject) => {
            clientDB(db => {

                db.collection("users").findOne({

                    email: currentUserDatas.email,
                    password: currentUserDatas.password
                    
                },
                { 
                    // We project Only some informations to Front-End to construct UI
                    projection: {password: 0}
                })
                .then( result => {

                    console.log('user has been found', result);
                    resolve(result);

                })
                .catch( err => {

                    console.log('user hasn\'t been found, username or password are incorrect', err);
                    resolve(err);
                    
                })





                // cursor.toArray((err, docs) => {
                //     if(err){
                //         console.log(err);
                //         reject(err);
                //     }

                //     if(docs){
                //         console.log("users retrieved", docs[0]);
                //         resolve(docs[0]);
                //     }
                // });
            });
        });

    }
}