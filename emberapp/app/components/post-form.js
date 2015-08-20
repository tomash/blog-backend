import Ember from 'ember';

export default Ember.Component.extend({
  titleMaxLength: 255,
  bodyMaxLength: 4000,

  actions: {
    submit() {
      let post = {
        title: this.get('title'),
        body: this.get('body')
      };

      this.sendAction('action', post);
    }
  }
});
