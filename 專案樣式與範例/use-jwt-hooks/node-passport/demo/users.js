// const promisify = require('util').promisify

// only for demo
const users = [
  { id: 1, username: 'pony', password: '11111', role: 'admin' },
  { id: 2, username: 'harry', password: '12345', role: 'user' },
  { id: 3, username: 'eddy', password: '33333', role: 'admin' },
]

module.exports = function findOne({ username, password }) {
  const user = users.find((u) => {
    return u.username === username && u.password === password
  })

  // if found return user else return undefined
  return user
}

module.exports = function findOneById(id) {
  const user = users.find((u) => {
    return u.id === id
  })

  // if found return user else return undefined
  return user
}

module.exports = function create(user) {
  users.push(user)
  return user
}
