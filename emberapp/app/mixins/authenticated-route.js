import Ember from 'ember';

export default Ember.Mixin.create({
  beforeModel(transition) {
    if (!this.get('session.isSignedIn')) {
      let signInController = this.controllerFor('sign-in', true);

      if (!signInController) {
        signInController = this.generateController('sign-in');
      }

      signInController.set('previousTransition', transition);

      this.transitionTo('sign-in');
    }
  }
});
