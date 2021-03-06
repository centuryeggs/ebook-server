const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('./constant')

function md5(s) {
  return crypto.createHash('md5').update(String(s)).digest('hex')
}
function decoded(req) {
  let token = req.get('Authorization')
  console.log(token);
  if (token.indexOf('Bearer') === 0) {
    token = token.replace('Bearer ', '')
  }
  return jwt.verify(token, PRIVATE_KEY)
}
function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]'
}

module.exports = { md5, decoded, isObject }