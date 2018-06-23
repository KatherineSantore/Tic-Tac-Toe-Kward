'use strict'
const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  $('#announcer').html('You are signed up! Now sign-in to play!')
  $('#sign-up-form').hide()
}
const signUpError = function () {
  $('#announcer').html('You are not signed up!').toggle(6000)
}

const signInSuccess = function (response) {
  $('#announcer').html('You are signed in! Make your first move!')
  $('#hidden').show()
  $('#showFirst').hide()

  store.user = response.user
}
const signInError = function (response) {
  $('#announcer').html('Please try again!').toggle(6000)
}

const changePasswordSuccess = function (response) {
  $('#change-password-form').html('Your password is changed!').toggle(6000)
}

const changePasswordError = function (response) {
  $('#change-password-form').html('Your password is not changed! Try again.').toggle(6000)
}

const signOutSuccess = function (response) {
  $('#announcer').html('You are signed out!').toggle(6000)
  $('#hidden').hide()
  $('#showFirst').show()
  delete store.user
}
const signOutFailure = function (error) {
  console.log('something went wrong. Your error:', error)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordError

}
