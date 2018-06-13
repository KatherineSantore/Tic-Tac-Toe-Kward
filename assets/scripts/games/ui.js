'use strict'
const store = require('../store')

const newGameSuccess = function (data) {
  console.log('the response is', data)
  store.game = data.game
}
const newGameFailure = function (error) {
  console.log('Error in new game creation', error)
}
const displayGameSuccess = function (data) {
  console.log('the response is', data)
  store.game = data.game
}
const displayGameFailure = function (error) {
  console.log('Error in  game display', error)
}
const updateGameSuccess = function (data) {
  console.log('the response is', data)
  store.game = data.game
}
const updateGameFailure = function (error) {
  console.log('Error in game update', error)
}
const getStatsSuccess = function (data) {
  console.log('the response is', data)
  $('#gameStats').html('You\'ve played ' + data.games.length + ' games')
}
const getStatsFailure = function (error) {
  console.log('Error in game update', error)
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