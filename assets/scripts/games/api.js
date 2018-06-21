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
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}
const updateGame = function (cellId, letter, boolean) {
  const data = {
    "game": {
      "cell": {
        "index": cellId,
        "value": letter
      },
      "over": boolean
    }
  }
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
  "game": {
    "cell": {
      "index": cellId,
      "value": letter
    },
    "over": boolean
  }
}
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
