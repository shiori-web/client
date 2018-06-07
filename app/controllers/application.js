import { inject } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  session: inject(),

  actions: {
    signout() {
      this.get('session').invalidate();
      this.transitionToRoute('signin');
    }
  }
});
