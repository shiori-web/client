import { inject } from '@ember/service';
import Component from '@ember/component';
import { invoke } from 'ember-invoke-action';
import { task } from 'ember-concurrency';
import { computed } from '@ember/object';

export default Component.extend({
  isOpen: false,
  username: null,
  password: null,

  notify: inject(),
  session: inject(),

  loading: computed('signin.isIdle', function() {
    return !this.get('signin.isIdle');
  }),

  signin: task(function* () {
    let { username, password } = this.getProperties('username', 'password');
    yield this.get('session').authenticate(username, password).then(() => {
      invoke(this, 'closeModal');
    }).catch((e) => {
      this.get('notify').alert(this.get('i18n').t('errors.invalid_credentials'));
    });
  }).drop(),

  actions: {
    closeModal() {
      this.set('username', null);
      this.set('password', null);
      this.set('isOpen', false);
    }
  }
});
