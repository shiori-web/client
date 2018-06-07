import ENV from 'shiori/config/environment';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  refreshAccessTokens: true,
  serverTokenEndpoint: `${ENV.APP.baseApiUrl}/oauth/token`,
  serverTokenRevocationEndpoint: `${ENV.APP.baseApiUrl}/oauth/revoke`
});
