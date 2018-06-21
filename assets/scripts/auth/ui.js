'use strict'
const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  $('#announcer').html('You are signed up! Now sign-in to play!')
  $('#sign-up-form').hide()
}
const signUpError = function () {
  $('#auth_feedback').html('You are not signed up!')
}

const signInSuccess = function (response) {
  $('#announcer').html('You are signed in!').toggle(6000)
  store.user = response.user
}
const signInError = function (response) {
  $('#auth_feedback').html('Please try again!')
}

const changePasswordSuccess = function (response) {
  console.log('response is', response)
}

const changePasswordError = function (error) {
  console.log('Error in sign in is', error)
}

const signOutSuccess = function (response) {
  console.log('You were successfully signed out')
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
