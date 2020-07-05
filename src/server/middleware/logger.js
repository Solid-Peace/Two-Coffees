const moment = require('moment');

const logger = (req, res, next) => {
    console.log(
        `${req.protocol}://${req.get('host')}${req.originalUrl}:  ${moment().format()}`
    );

    // console.log("request", req);
    // console.log("respond", res);

    next();
};


module.exports = logger;