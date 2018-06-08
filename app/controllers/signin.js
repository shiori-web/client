import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),

  actions: {
    signin() {
      let { username, password } = this.get('model');
      this.get('session').authenticate(username, password).catch(() => {
        this.set('error', this.get('i18n').t('errors.invalid_credentials'));
        this.set('model.password', '');
      });
    }
  }
});
