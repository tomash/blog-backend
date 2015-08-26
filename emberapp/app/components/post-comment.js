import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['post-comment'],

  actions: {
    updateComment(comment) {
      this.sendAction('updateComment', comment)
    },

    destroy(comment) {
      this.sendAction('destroyComment', comment);
    },

    toggle() {
      this.get('comment').toggleProperty('isEdited');
    }
  }
});
