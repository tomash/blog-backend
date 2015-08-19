import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {body: 'abc', title: 'omg'},
      {body: 'xkc', title: 'hax'}
    ];
  },
  setupController(controller, posts) {
    console.log("the posts are ", posts);
    controller.set('posts', posts);
  }
});
