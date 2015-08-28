import Ember from 'ember';

export default Ember.Controller.extend({
  auth: Ember.inject.service('authentication'),

  actions: {
    signOut() {
      this.auth.signOut();
      this.transitionToRoute('index');
    }
  }
});
