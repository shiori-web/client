import DS from 'ember-data';
import ENV from 'shiori/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend({
  namespace: ENV.APP.baseApiUrl
}, DataAdapterMixin);
