'use strict'

const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  console.log('user is', store.user)
  return $.ajax({
    method: 'PATCH',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: 'https://tic-tac-toe-wdi.herokuapp.com/sign-out',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword
}
