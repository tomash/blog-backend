import Ember from 'ember';

export default Ember.Component.extend({
  titleMaxLength: 255,
  bodyMinLength: 20,
  bodyMaxLength: 4000,

  actions: {
    save() {
      let post = this.get('post');

      this.sendAction('action', post);
    },

    cancel() {
      this.sendAction('cancel');
    }
  }
});
