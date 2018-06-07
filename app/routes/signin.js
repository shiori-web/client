import Route from '@ember/routing/route';
import  UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  routeIfAlreadyAuthenticated: 'home',

  resetController(controller, isExiting, transition) {
    if (isExiting) {
      controller.clearState();
    }
  }
});
