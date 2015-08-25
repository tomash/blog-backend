import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['post-form'],

  actions: {
    updatePost(post) {
      this.sendAction('action', post);
    }
  }
});
