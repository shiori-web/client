import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),

  actions: {
    login() {
      let { username, password } = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:oauth2', username, password).then(() => {
        this.transitionToRoute('/');
      }).catch(() => {
        this.set('error', 'Invalid username or password');
      });
    }
  }
});
