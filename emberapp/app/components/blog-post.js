import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['blog-post'],

  actions: {
    destroyPost(post) {
      console.log("blog-post post = ", post);
      this.sendAction('destroyPost', post);
    }
  }
});
