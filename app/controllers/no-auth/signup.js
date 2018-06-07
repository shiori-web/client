import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    signup() {
      let user = this.get('store').createRecord('user', {
        name: this.get('name'),
        email: this.get('email'),
        username: this.get('username'),
        password: this.get('password'),
        redirectUrl: 'http://localhost:4200/signin'
      });

      user.save().then(() => {
        this.transitionToRoute('no-auth.signin');
      }).catch((err) => {
        this.set('password', '');
      });
    }
  },

  clearState() {
    this.setProperties({
      'name': null,
      'email': null,
      'username': null,
      'password': null
    });
  }
});
