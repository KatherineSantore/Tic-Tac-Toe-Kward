'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gamesEvents = require('./games/events.js')
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
  $(window).on('load', function () {
    $('#myModal').modal('show')
  })

  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#resetGame').on('click', gamesEvents.onNewGame)
  $('#statsButton').on('click', gamesEvents.onGetStats)
  $('#change-password-form').hide()
})
