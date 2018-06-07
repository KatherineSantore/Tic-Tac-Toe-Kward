'use strict'

const store = require('../store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://tic-tac-toe.wdibos.com/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://tic-tac-toe.wdibos.com/sign-in',
    data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: 'http://tic-tac-toe.wdibos.com/sign-out',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
    // add token
  })
}
module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut
}
