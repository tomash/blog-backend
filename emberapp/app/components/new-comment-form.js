import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['comment-form'],

  actions: {
    submit() {
      this.sendAction('action', this.get('body'));
    }
  }
});
