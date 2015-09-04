import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: false,
  authToken: Ember.computed.alias('currentUser.auth_token'),
  isSignedIn: Ember.computed.alias('currentUser'),

  init() {
    if (localStorage.currentUser) {
      this.pushCurrentUser(JSON.parse(localStorage.currentUser));
    }
  },

  pushCurrentUser(userAttributes) {
    let normalizedAttrs = this.store.normalize('user', userAttributes);
    let userRecord = this.store.push(normalizedAttrs);

    this.set('currentUser', userRecord);
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
      localStorage.currentUser = JSON.stringify(response.user);
      this.pushCurrentUser(response.user);
    });
  },

  destroy() {
    this.set('currentUser', false);
    delete localStorage.currentUser;
  }
});
