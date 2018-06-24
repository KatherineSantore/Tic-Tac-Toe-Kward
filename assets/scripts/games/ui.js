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
  $('#gameStats').html('You\'ve played ' + data.games.length + ' games').toggle(6000)
}
const getStatsFailure = function (data) {
  $('#gameStats').html('Stats are not avilable at this time').toggle(6000)
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
