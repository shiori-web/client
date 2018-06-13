import { inject } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  isActive: false,
  session: inject(),
  isSigninModalOpen: false,
  isSignupModalOpen: false,

  actions: {
    toggleActive() {
      this.toggleProperty('isActive');
    },

    openSigninModal() {
      this.set('isSigninModalOpen', true);
    },

    openSignupModal() {
      this.set('isSignupModalOpen', true);
    },

    signout() {
      this.get('session').invalidate();
    }
  }
});
