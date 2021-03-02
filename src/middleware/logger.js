'use strict';

const logger = (req, res, next) => {
  console.log(`Path ==> `, req.path);
  console.log(`Method ==> `, req.method);
  next();
}

module.exports = logger;
