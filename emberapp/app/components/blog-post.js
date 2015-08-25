import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['blog-post'],

  commentsCount: Ember.computed.alias('post.comments.length'),
  hasComments: Ember.computed('commentsCount', function() {
    return this.get('commentsCount') > 0;
  }),

  actions: {
    destroyPost(post) {
      console.log("blog-post post = ", post);
      this.sendAction('destroyPost', post);
    }
  }
});
