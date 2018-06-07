import DS from 'ember-data';
import { inject } from '@ember/service';
import ENV from 'shiori/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  session: inject(),
  host: ENV.APP.baseApiUrl,

  authorize(xhr) {
    const { access_token: accessToken } = this.get('session').get('data.authenticated');
    xhr.setRequestHeader('Authorization', `Bearer ${accessToken}`);
  }
});
