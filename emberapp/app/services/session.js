import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: false,
  authToken: Ember.computed.alias('currentUser.authToken'),
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
      this.set('currentUser', response.user);
      localStorage.currentUser = JSON.stringify(response.user);
    });
  },

  destroy() {
    this.set('authToken', false);
    this.set('currentUser', false);
    delete localStorage.authToken;
  }
});
