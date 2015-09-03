import Ember from 'ember';
import AuthenticatedRouteMixin from '../../mixins/authenticated-route';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
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
