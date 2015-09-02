import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  errorMessage: Ember.computed.alias('controller.errorMessage'),
  username: Ember.computed.alias('controller.username'),
  password: Ember.computed.alias('controller.password'),

  actions: {
    submit() {
      let session = this.get('session'),
          username = this.get('username'),
          password = this.get('password');

      session.create(username, password).done(() => {
        this.set('controller.errorMessage', false);

        let previousTransition = this.get('controller.previousTransition');

        if (previousTransition) {
          previousTransition.retry();
        } else {
          this.transitionTo('index');
        }
      }).fail(() => {
        this.set('controller.errorMessage', 'Invalid username or password!');
      });
    }
  }
});
