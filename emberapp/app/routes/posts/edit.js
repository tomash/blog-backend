import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  setupController(controller, post) {
    controller.set('post', post);
  },

  actions: {
    updatePost(post) {
      console.log('posts-edit-route:updatePost', post);

      post.save().then(() => this.transitionTo('posts'));
    }
  }
});
