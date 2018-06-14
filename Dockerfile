FROM node

RUN set -ex \
  && export WATCHMAN_VERSION=4.9.0 \
  && curl -SL "https://github.com/facebook/watchman/archive/v${WATCHMAN_VERSION}.tar.gz" | tar -xz -C /tmp/ \
  && cd /tmp/watchman-${WATCHMAN_VERSION} \
  && ./autogen.sh \
  && ./configure \
  && apt-get update && apt-get install -y --no-install-recommends python-dev \
  && make && make install \
  && apt-get purge -y --auto-remove python-dev \
  && rm -rf /var/lib/apt/lists/* \
  && rm -rf /tmp/*

ENV APP_DIR /shiori
WORKDIR $APP_DIR

ADD . $APP_DIR

RUN npm -q install
RUN npm -q install -g ember-cli

EXPOSE 4200
EXPOSE 35730
