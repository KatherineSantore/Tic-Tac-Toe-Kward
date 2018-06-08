#!/bin/bash

curl "http://tic-tac-toe.wdibos.com" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
