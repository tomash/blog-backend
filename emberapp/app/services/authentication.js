import Ember from 'ember';

export default Ember.Service.extend({
  login: false,
  isSignedIn: Ember.computed.alias('login'),

  init() {
    let login = localStorage['login'];

    if (login) {
      this.signIn(login);
    }
  },

  signIn(login) {
    // we just ignore password, it is in form just to resemble
    // regular sign-in form
    this.set('login', login);
    localStorage['login'] = login;
  },

  signOut() {
    this.set('login', false);
  }
});
