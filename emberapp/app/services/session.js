import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: false,
  authToken: Ember.computed.alias('currentUser.auth_token'),
  isSignedIn: Ember.computed.alias('currentUser'),

  init() {
    if (localStorage.currentUser) {
      this.set('currentUser', JSON.parse(localStorage.currentUser));
    }
  },

  create(username, password) {
    return Ember.$.ajax({
      url: '/auth_token',
      method: 'post',
      data: {
        username: username,
        password: password
      }
    }).done((response) => {
      // this should be an instance of User model, but i have problems
      // with injecting store to this service, hence this jsony user data ;(
      //
      // when injecting store service, like this:
      // `store: Ember.inject.service('store'),`
      //
      // Ember complains with following error:
      // `Uncaught Error: Attempting to inject an unknown injection: service:store`
      this.set('currentUser', response.user);
      localStorage.currentUser = JSON.stringify(response.user);
    });
  },

  destroy() {
    this.set('currentUser', false);
    delete localStorage.currentUser;
  }
});
