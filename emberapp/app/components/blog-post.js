import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['blog-post'],

  actions: {
    destroy() {
      let post = this.get('post');

      if (confirm(`Do you really want to destroy post ${post.title}?`)) {
        post.destroyRecord();
      }
    }
  }
});
