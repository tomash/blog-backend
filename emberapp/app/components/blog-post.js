import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroy() {
      let post = this.get('post');

      if (confirm(`Do you really want to destroy post ${post.title}?`)) {
        post.destroyRecord();
      }
    }
  }
});
