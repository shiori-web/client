import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    signup() {
      this.get('model').save().then(() => {
        this.transitionToRoute('signin');
      }).catch(() => {
        this.set('model.password', '');
      });
    }
  }
});
