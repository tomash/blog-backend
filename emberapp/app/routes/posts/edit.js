import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    if (!this.get('auth.isSignedIn')) {
      let signInController = this.controllerFor('sign-in', true);

      if (!signInController) {
        signInController = this.generateController('sign-in');
      }

      signInController.set('previousTransition', transition);

      this.transitionTo('sign-in');
    }
  },

  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  setupController(controller, post) {
    controller.set('post', post);
  },

  actions: {
    updatePost(post) {
      post.save().then(() => this.transitionTo('index'));
    },

    gotoIndex() {
      this.transitionTo('index');
    }
  }
});
