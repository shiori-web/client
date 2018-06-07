import DS from 'ember-data';
import { run } from '@ember/runloop';
import { inject } from '@ember/service';
import Session from 'ember-simple-auth/services/session';

export default Session.extend({
  store: inject(),

  authenticate(username, password) {
    return this._super('authenticator:oauth2', username, password);
  },

  async getCurrentUser() {
    const users = await this.get('store').query('user', {
      filter: { self: true }
    });

    const user = users.get('firstObject');

    if (user) {
      run(() => {
        this.set('user', user)
      });
      return user;
    } else {
      run(() => {
        this.invalidate();
        this.set('user', null);
      });

      throw DS.UnauthorizedError();
    }
  }
});
