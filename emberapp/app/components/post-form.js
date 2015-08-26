import Ember from 'ember';

export default Ember.Component.extend({
  titleMaxLength: 255,
  bodyMaxLength: 4000,

  remainingChars: Ember.computed('post.body', 'bodyMaxLength', function() {
    let maxLength = this.get('bodyMaxLength'),
        body = this.get('post.body') || '';

    return maxLength - body.length;
  }),

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
