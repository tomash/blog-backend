import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  isFormShown: false,
  classNames: ['comment-form'],

  actions: {
    toggleForm() {
      this.toggleProperty('isFormShown');
    }
  }
});
