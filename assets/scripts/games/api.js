'use strict'
const store = require('../store')

const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}
const displayGame = function () {
  return $.ajax({
    method: 'GET',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games/;id',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}
const updateGame = function () {
  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games/;id',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}
const getStats = function () {
  return $.ajax({
    method: 'GET',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/games',
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
