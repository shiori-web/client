#! /bin/bash

set -e

: ${APP_PATH:="/shiori"}
: ${APP_TEMP_PATH:="$APP_PATH/tmp"}
: ${APP_SETUP_LOCK:="$APP_TEMP_PATH/setup.lock"}
: ${APP_SETUP_WAIT:="5"}

function lock_setup { mkdir -p $APP_TEMP_PATH && touch $APP_SETUP_LOCK; }
function unlock_setup { rm -rf $APP_SETUP_LOCK; }
function wait_setup { echo "waiting for app setup to finish..."; sleep $APP_SETUP_WAIT; }

if [ -z "$1" ]; then set -- ember server --live-reload-port 35730 "$@"; fi

if [[ "$1" = "ember" ]]
then

  trap unlock_setup HUP INT QUIT KILL TERM EXIT

  while [ -f $APP_SETUP_LOCK ]; do wait_setup; done

  lock_setup

  npm install

  unlock_setup

fi

exec "$@"
