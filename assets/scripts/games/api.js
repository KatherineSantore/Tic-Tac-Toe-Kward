'use strict'
const store = require('../store')
const config = require('../config')

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}
const displayGame = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/:id',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}
const updateGame = function () {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/:id',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}
const getStats = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame: newGame,
  displayGame: displayGame,
  updateGame: updateGame,
  getStats: getStats
}
