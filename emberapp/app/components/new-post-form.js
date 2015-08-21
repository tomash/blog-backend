import Ember from 'ember';

export default Ember.Component.extend({
  isFormShown: true, ////////////////////////////// REMEMBER TO CHANGE IT
  classNames: ['post-form'],

  actions: {
    showForm() {
      this.set('isFormShown', true);
    },
    createPost(post) {
      console.log('new-post-form:createPost', post);
      this.sendAction('action', post);
    }
  }
});
