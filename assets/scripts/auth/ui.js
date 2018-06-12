'use strict'
const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  console.log('You were successfully signed up')
}
const signUpError = function (error) {
  console.log('Error in sign up is', error)
}

const signInSuccess = function (response) {
  console.log('response is', response)
  store.user = response.user
}
const signInError = function (error) {
  console.log('Error in sign in is', error)
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
