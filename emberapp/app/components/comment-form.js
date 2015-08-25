import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['comment-form'],
  cancel: false,

  actions: {
    save() {
      this.sendAction('action', this.get('comment'));
    },

    cancel() {
      this.sendAction('cancel');
    }
  }
});
