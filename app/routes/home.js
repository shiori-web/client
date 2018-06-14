import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let store = this.get('store');

    return hash({
      seasonal: store.query('anime', {
        page: { size: 5 },
        filter: { season: new Date() }
      }),
      ongoing: store.query('anime', {
        page: { size: 5 },
        filter: { status: 'ongoing' }
      })
    });
  }
});
