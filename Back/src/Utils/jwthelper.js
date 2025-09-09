// utils/jwtHelpers.js
const jwt = require('jsonwebtoken');

function signToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES || '1h' },
      (err, token) => (err ? reject(err) : resolve(token))
    );
  });
}

module.exports = { signToken };
