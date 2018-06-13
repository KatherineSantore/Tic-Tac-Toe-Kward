'use strict'

const store = require('../store')

const api = require('./api.js')
const ui = require('./ui.js')

const playerOne = 'X'
const playerTwo = 'O'
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

const checkForWin = function () {
  for (let i = 0; i < 9; i++) {
    if (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[2] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
    } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[5] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
    } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[8] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
    } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[6] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
    } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[7] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
    } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[8] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
    } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[8] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
    } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[6] !== '') {
      $('#gameStatus').html(activePlayer + ' wins!')
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
  }
}

$('.col').on('click', function () {
  turnCount += 1
  playerTurn()
  console.log('activePlayer is ', activePlayer)
  $(this).html(activePlayer)
  const i = $(this).attr('id')
  console.log('store is ', store)
  console.log('store.game.cells is ', store.game.cells)
  store.game.cells[i] = activePlayer
  console.log(store.game.cells)
  console.log('store.game.cells is ' + store.game.cells)
  checkForWin()
  checkForDraw()
})
const onNewGame = () => {
  $('.col').html('')
  console.log('in new game')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onDisplayGame = () => {
  // console.log('store.game.cells is ' + store.game.cells)
  // console.log('here')
  // turnCount = 0
  api.displayGame()
    .then(ui.displayGameSuccess)
    .catch(ui.displayGameFailure)
}

const onUpdateGame = () => {
  // console.log('store.game.cells is ' + store.game.cells)
  // console.log('here')
  // turnCount = 0
  api.updateGame()
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}
const onGetStats = () => {
  // console.log('store.game.cells is ' + store.game.cells)
  // console.log('here')
  // turnCount = 0
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
