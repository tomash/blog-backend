import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['comment-form'],

  actions: {
    save() {
      this.sendAction('action', this.get('comment'));
    }
  }
});
