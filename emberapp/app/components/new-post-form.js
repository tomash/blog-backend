import Ember from 'ember';

export default Ember.Component.extend({
  isFormShown: false,
  classNames: ['post-form'],

  actions: {
    showForm() {
      this.set('isFormShown', true);
    },
    createPost(post) {
      console.log('new-post-form:createPost', post);
      this.set('isFormShown', false);

      this.sendAction('action', post);
    }
  }
});
