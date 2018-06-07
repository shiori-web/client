import { inject } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  isActive: false,
  session: inject('session'),

  actions: {
    toggleActive() {
      this.toggleProperty('isActive');
    },

    signout() {
      this.get('signout')();
    }
  }
});
