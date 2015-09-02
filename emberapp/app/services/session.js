import Ember from 'ember';

export default Ember.Service.extend({
  authToken: false,
  isSignedIn: Ember.computed.alias('authToken'),

  init() {
    let authToken = localStorage.authToken;

    if (authToken) {
      this.set('authToken', authToken);
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
      this.set('authToken', response.auth_token);
      localStorage.authToken = response.auth_token;
    });
  },

  signOut() {
  }
});
