/*
*
*  Middleware checking incoming datas
*
*/

module.exports = {

    register: (req, res, next) => {

        // Test 
        console.log('hello checkUserDatas');
        console.log(req.body);

        // Next if corresponde
        if (req.body.test == "true") {
            console.log('test ok : go next')
            next();

        // Return error if not corresponde
        } else {
            res.json({
                msg: "error datas"
            })
        }
    },

    login: (req, res, next) => {

            // Test
            console.log('hello login checking data')
    }
}