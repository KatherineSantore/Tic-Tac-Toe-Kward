'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')
const gamesEvents = require('../games/events')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('the form was submitted')
  const data = getFormFields(event.target)
  $('#sign-up-form').html('You are signed up!')

  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('the form was submitted')
  const data = getFormFields(event.target)
  $('#sign-in-form').html('You are signed in!')
  $('#change-password-form').show()
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .then(gamesEvents.onNewGame)
    .catch(authUi.signInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  $('#change-password-form').html('Your password is changed!')
  console.log('data is', data)

  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  $('#sign-out').html('You are signed out!')
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
