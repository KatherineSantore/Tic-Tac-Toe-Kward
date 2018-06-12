'use strict'
const store = require('../store')

const newGameSuccess = function (data) {
  console.log('the response is', data)
  store.game = data.game
}
const newGameFailure = function (error) {
  console.log('Error in new game creation', error)
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
