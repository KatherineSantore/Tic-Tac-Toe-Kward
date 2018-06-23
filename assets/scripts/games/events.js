'use strict'

const store = require('../store')

const api = require('./api.js')
const ui = require('./ui.js')

const playerOne = 'x'
const playerTwo = 'o'
// $(document).ready(function () {
let turnCount = 0
let activePlayer = null
const playerTurn = function () {
  for (let i = 0; i < 9; i++) {
    if ((turnCount % 2) === 0) {
      activePlayer = playerTwo
    } else if ((turnCount % 2) === 1) {
      activePlayer = playerOne
    }
    return (activePlayer)
  }
}

const onUpdateGame = (cellId, letter, boolean) => {
  api.updateGame(cellId, letter, boolean)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const checkForWin = function () {
  for (let i = 0; i < 9; i++) {
    if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[2] !== '') {
      store.game.over = true
      $('.col').off('click')
      $('#gameStatus').html(activePlayer + ' wins!')
    } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[5] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
      store.game.over = true
      $('.col').off('click')
    } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[8] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
      store.game.over = true
      $('.col').off('click')
    } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[6] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
      store.game.over = true
      $('.col').off('click')
    } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[7] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
      store.game.over = true
      $('.col').off('click')
    } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[8] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
      store.game.over = true
      $('.col').off('click')
    } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[8] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
      store.game.over = true
      $('.col').off('click')
    } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[6] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
      store.game.over = true
      $('.col').off('click')
    } else if (store.game.cells !== '') {
      $('#gameStatus').html('No winner yet!')
    }
  }
}

const checkForDraw = function () {
  if ((store.game.cells[0] !== '') && (store.game.cells[1] !== '') && (store.game.cells[2] !== '') && (store.game.cells[3] !== '') &&
  (store.game.cells[4] !== '') && (store.game.cells[5] !== '') && (store.game.cells[6] !== '') && (store.game.cells[7] !== '') &&
  (store.game.cells[8] !== '')) {
    $('#gameStatus').html('It\'s a draw!')
    store.game.over = true
  }
}

const onNewGame = () => {
  $('.col').html('')
  $('#gameStatus').html('Try to get three in a row!')
  $('.col').on('click', function () {
    if ($(this).text() === '') {
      turnCount += 1
      playerTurn()
      $(this).html(activePlayer)
      const i = $(this).attr('id')
      $('#announcer').html('')
      store.game.cells[i] = activePlayer
      checkForWin()
      checkForDraw()
      onUpdateGame(i, store.game.cells[i], store.game.over)
    }
  })
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onDisplayGame = () => {
  api.displayGame()
    .then(ui.displayGameSuccess)
    .catch(ui.displayGameFailure)
}

const onGetStats = () => {
  api.getStats()
    .then(ui.getStatsSuccess)
    .catch(ui.getStatsFailure)
}
module.exports = {
  onNewGame: onNewGame,
  onDisplayGame: onDisplayGame,
  onUpdateGame: onUpdateGame,
  onGetStats: onGetStats
}
