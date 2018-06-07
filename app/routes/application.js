import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  routeAfterAuthentication: 'home',

  beforeModel() {
    if (this.get('session').get('isAuthenticated')) {
      return this._getCurrentUser();
    }
  },

  sessionAuthenticated() {
    this._getCurrentUser();
    this._super(...arguments);
  },

  _getCurrentUser() {
    return this.get('session').getCurrentUser().catch(() => {
      this.get('session').invalidate();
    });
  }
});
