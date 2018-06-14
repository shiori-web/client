import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  animes: computed('model', function() {
    return this.get('model');
  })
});
