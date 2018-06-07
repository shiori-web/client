import Route from '@ember/routing/route';
import  UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  routeIfAlreadyAuthenticated: 'home',

  model() {
    return this.get('store').createRecord('user', {
      redirectUrl: 'http://localhost:4200/signin'
    });
  }
});
