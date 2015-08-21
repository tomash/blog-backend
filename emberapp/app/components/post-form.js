import Ember from 'ember';

export default Ember.Component.extend({
  titleMaxLength: 255,
  bodyMaxLength: 4000,

  actions: {
    submit() {
      let post = this.get('post');

      this.sendAction('action', post);
    }
  }
});
