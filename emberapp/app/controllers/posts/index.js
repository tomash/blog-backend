import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroy(post) {
      if (confirm(`Do you really want to destroy post ${post.title}?`)) {
        post.destroyRecord();
      }
    }
  }
});
