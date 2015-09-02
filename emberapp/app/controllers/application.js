import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    signOut() {
      this.session.signOut();
      this.transitionToRoute('index');
    }
  }
});
