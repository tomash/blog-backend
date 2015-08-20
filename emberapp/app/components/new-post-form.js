import Ember from 'ember';

export default Ember.Component.extend({
  isFormShown: true, ////////////////////////////// REMEMBER TO CHANGE IT
  titleMaxLength: 255,
  bodyMaxLength: 4000,

  classNames: ['new-post-form'],

  actions: {
    showForm() {
      this.set('isFormShown', true);
    },
    savePost(fn, name) {
      console.log(arguments);
    }
  }
});
