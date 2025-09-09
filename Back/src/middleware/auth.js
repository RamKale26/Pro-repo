// middleware/auth.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyTokenPromise(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN"

  if (!token) return res.status(401).json({ message: 'Token missing' });

  verifyTokenPromise(token)
    .then((payload) => {
      req.user = payload; // { id, email, role }
      next();
    })
    .catch((err) => {
      console.error('Token verify error:', err);
      res.status(403).json({ message: 'Invalid or expired token' });
    });
}

module.exports = authenticateToken;
