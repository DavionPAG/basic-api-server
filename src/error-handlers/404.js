'use strict';

function badRequest(req, res, next) {
  res.status(404).json({status: '404', text: 'Not Found'})
}

module.exports = badRequest;