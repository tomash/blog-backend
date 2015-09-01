import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service('authentication'),

  actions: {
    submit(login, password) {
      this.auth.signIn(login, password).done(() => {
        this.set('controller.errorMessage', false);

        let previousTransition = this.get('controller.previousTransition');

        if (previousTransition) {
          previousTransition.retry();
        } else {
          this.transitionTo('index');
        }
      }).fail(() => {
        this.set('controller.errorMessage', 'Invalid login or password!');
      });
    }
  }
});
