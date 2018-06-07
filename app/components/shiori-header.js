import { inject } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  isActive: false,
  session: inject(),

  actions: {
    toggleActive() {
      this.toggleProperty('isActive');
    },

    signout() {
      this.get('session').invalidate();
    }
  }
});
