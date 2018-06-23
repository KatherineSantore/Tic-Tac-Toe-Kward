'use strict'
const store = require('../store')

const newGameSuccess = function (data) {
  store.game = data.game
}
const newGameFailure = function (response) {
}
const displayGameSuccess = function (data) {
}
const displayGameFailure = function (response) {
}
const updateGameSuccess = function (data) {
}
const updateGameFailure = function (response) {
}
const getStatsSuccess = function (data) {
  console.log('the response is', data)
  $('#gameStats').html('You\'ve played ' + data.games.length + ' games')
}
const getStatsFailure = function (data) {
  $('#gameStats').html('Stats are not avilable at this time')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  displayGameSuccess,
  displayGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getStatsSuccess,
  getStatsFailure
}
