import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  notify: inject(),
  routeAfterAuthentication: 'home',

  beforeModel() {
    if (this.get('session').get('isAuthenticated')) {
      return this._getCurrentUser();
    }
  },

  sessionAuthenticated() {
    this._getCurrentUser().then(() => {
      this.get('notify').success(
        this.get('i18n').t('success.welcome_back', {name: this.get('session.user.name')})
      );
    });
    this._super(...arguments);
  },

  _getCurrentUser() {
    return this.get('session').getCurrentUser().catch(() => {
      this.get('session').invalidate();
    });
  }
});
