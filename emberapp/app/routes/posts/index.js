import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  setupController(controller, posts) {
    controller.set('posts', posts);
  },

  actions: {
    createPost(post) {
      console.log('posts-index-route:createPost', post);

      let store = this.get('store');
      store.createRecord('post', post);
    }
  }
});
