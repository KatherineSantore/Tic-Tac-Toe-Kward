'use strict'
const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is', signUpResponse)
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
const signOutSuccess = function (response) {
  console.log('You were successfully signed out')
  delete store.user
  console.log('store after sign out is ', store)
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
  signOutFailure

}
