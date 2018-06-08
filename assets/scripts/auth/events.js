'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const authApi = require('./api')
const authUi = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('the form was submitted')

  const data = getFormFields(event.target)

  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('the form was submitted')

  const data = getFormFields(event.target)
  console.log('data is', data)

  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInError)
}

const SignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  SignOut
}