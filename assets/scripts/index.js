'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // use require without a reference to ensure a file is bundled
  // require('./example')
  // document on ready waits until all of our code loads
  // your JS code goes here
  // Create Empty Board in JS, Add to Board, Turn rotates between x and o
  //  Can not choose already occupied spots, Check Board for Winner
  const playerOne = 'X'
  const playerTwo = 'O'
  // $(document).ready(function () {
  const board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
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

  $('.col').click(function () {
    turnCount += 1
    playerTurn()
    console.log('activePlayer is ', activePlayer)
    $(this).html(activePlayer)
    const i = $(this).attr('id')
    console.log('i is ' + i)
    board[i] = activePlayer
    console.log(board[i])
    console.log('board is ' + board)
    checkForWin()
  })

  function checkForWin () {
    for (let i = 0; i < 9; i++) {
      if (board[0] === board[1] && board[1] === board[2] && board[2] !== '') {
        $('#gameStatus').html(activePlayer + ' wins!')
      } else if (board[3] === board[4] && board[4] === board[5] && board[5] !== '') {
        return activePlayer
      } else if (board[6] === board[7] && board[7] === board[8] && board[8] !== '') {
        return activePlayer
      } else if (board[0] === board[3] && board[3] === board[6] && board[6] !== '') {
        return activePlayer
      } else if (board[1] === board[4] && board[4] === board[7] && board[7] !== '') {
        return activePlayer
      } else if (board[2] === board[5] && board[5] === board[8] && board[8] !== '') {
        return activePlayer
      } else if (board[0] === board[4] && board[4] === board[8] && board[8] !== '') {
        return activePlayer
      } else if (board[2] === board[4] && board[4] === board[6] && board[6] !== '') {
        return activePlayer
      } else {
        console.log('Draw Game')
      }
    }
  }

  // const newGame = function (){
  //   board = ['', '', '', '', '', '', '', '', '']
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // $('#new-game').on('click', onNewGame)
})
