import { inject } from '@ember/service';
import { computed } from '@ember/object';
import { task } from 'ember-concurrency';
import { invoke } from 'ember-invoke-action';
import Component from '@ember/component';

export default Component.extend({
  isOpen: false,

  store: inject(),
  notify: inject(),

  model: computed('store', function() {
    return this.get('store').createRecord('user', {
      redirectUrl: 'http://localhost:4200'
    });
  }),

  loading: computed('signup.isIdle', function() {
    return !this.get('signup.isIdle');
  }),

  signup: task(function* () {
    yield this.get('model').save().then(() => {
      invoke(this, 'closeModal');
      this.get('notify').success(this.get('i18n').t('success.signup'));
    });
  }).drop(),

  actions: {
    closeModal() {
      this.set('isOpen', false);
      this.set('model.name', null);
      this.set('model.username', null);
      this.set('model.email', null);
      this.set('model.password', null);
    }
  }
});
