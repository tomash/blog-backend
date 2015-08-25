import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateComment(comment) {
      this.sendAction('updateComment', comment)
    },

    toggle() {
      this.get('comment').toggleProperty('isEdited');
    }
  }
});
