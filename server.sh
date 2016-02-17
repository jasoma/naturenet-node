#!/bin/sh
#
# Starts the naturenet app locally using nodemon to auto-restart on any
# changes. Shares the same config variables in '.env' that heroku local
# would.
while read LINE; do
    export "$LINE"
done < .env

nodemon app.js