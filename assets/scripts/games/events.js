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
      // $('.store.game.cells').html(activePlayer + ' wins!')
    } else if (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[5] !== '') {
      // $('#gameStatus').html(activePlayer + ' wins!')
    } else if (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[8] !== '') {
      // $('#gameStatus').html(activePlayer + ' wins!')
    } else if (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[6] !== '') {
      // $('#gameStatus').html(activePlayer + ' wins!')
    } else if (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[7] !== '') {
      // $('#gameStatus').html(activePlayer + ' wins!')
    } else if (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[8] !== '') {
      // $('#gameStatus').html(activePlayer + ' wins!')
    } else if (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[8] !== '') {
      // $('#gameStatus').html(activePlayer + ' wins!')
    } else if (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[6] !== '') {
      // $('#gameStatus').html(activePlayer + ' wins!')
    } else {
      console.log('Draw Game')
    }
  }
}

$('.col').on('click',function() {
  turnCount += 1
  playerTurn()
  console.log('activePlayer is ', activePlayer)
  $(this).html(activePlayer)
  const i = $(this).attr('id')
  console.log('i is ' + i)
  store.game.cells[i] = activePlayer
  console.log(store.game.cells[i])
  console.log('store.game.cells is ' + store.game.cells)
  checkForWin()
})

// function resetGame () {
//   store.game.cells.forEach(html).remove
// }



const onNewGame = () => {
  // for (let i = store.game.cells[0]; i > store.game.cells.length; i++) {
  //   store.game.cells[i] = ''
  // }
  // console.log('store.game.cells is ' + store.game.cells)
  // console.log('here')
  // turnCount = 0
  $('.col').html('')
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

module.exports = {
  onNewGame: onNewGame
}
