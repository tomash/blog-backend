import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  setupController(controller, post) {
    controller.set('post', post);
  },

  actions: {
    destroyPost(post) {
      console.log("posts/show = ", post);

      if (confirm(`Do you really want to destroy post ${post.title}?`)) {
        post.destroyRecord().then(() => this.transitionTo('index'));
      }
    }
  }
});
