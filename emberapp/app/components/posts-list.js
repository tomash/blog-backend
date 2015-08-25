import Ember from 'ember';

export default Ember.Component.extend({
  /*
   * Sort posts by createdAt in descending order
   */
  orderedPosts: Ember.computed.sort('posts', function(postA, postB) {
    let timeA = postA.get('createdAt').getTime(),
        timeB = postB.get('createdAt').getTime();

    return -Ember.compare(timeA, timeB);
  }),

  actions: {
    destroyPost(post) {
      this.sendAction('destroyPost', post);
    }
  }
});
