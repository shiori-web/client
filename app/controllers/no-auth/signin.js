import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),

  actions: {
    signin() {
      let { username, password } = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:oauth2', username, password).then(() => {
        this.transitionToRoute('/');
      }).catch(() => {
        this.set('error', this.get('i18n').t('errors.invalid_credentials'));
        this.set('password', '');
      });
    }
  },

  clearState() {
    this.setProperties({
      'username': null,
      'password': null,
      'error': null
    });
  }
});
