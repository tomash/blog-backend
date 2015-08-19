import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  setupController(controller, posts) {
    console.log("the posts are ", posts);
    controller.set('posts', posts);
  }
});
