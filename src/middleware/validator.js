'use strict';

const validate = (req, res, next) => {

    let name = req.query.name;

    !name? badRequest : next();
}

module.exports = validate;
