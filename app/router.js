import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('no-auth', { path: '' }, function() {
    this.route('signin');
    this.route('signup');
  });
});

export default Router;
