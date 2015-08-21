import Ember from 'ember';

export default Ember.Component.extend({
  title: Ember.computed.alias('post.title'),
  body: Ember.computed.alias('post.body'),

  classNames: ['post-form'],

  actions: {
    updatePost(post) {
      console.log('edit-post-form:updatePost', post);
      this.sendAction('action', post);
    }
  }
});
