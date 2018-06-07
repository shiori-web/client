import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  i18n: service('i18n'),

  model() {
    return this.get('store').query('user', {
      filter: { self: true }
    }).then((users) => {
      return users.get('firstObject');
    });
  }
});
