
'use strict';


function validator(req, res, next) {
    const validName = req.query.name;
    const validObj = JSON.stringify({ name: validName });
    if (validName) {
        req.validator = validObj;
        next();
    } else {
        next('The Name NOT valid plese select a valid name')
    }

}

module.exports = validator;