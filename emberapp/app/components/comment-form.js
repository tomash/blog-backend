import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['comment-form'],
  cancel: false,
  bodyMinLength: 20,
  bodyMaxLength: 1000,

  actions: {
    save() {
      this.sendAction('action', this.get('comment'));
    },

    cancel() {
      this.sendAction('cancel');
    }
  }
});
