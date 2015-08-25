import Ember from 'ember';

export default Ember.Component.extend({
  // isEditing: Ember.computed.alias('comment.isEditing'),

  actions: {
    updateComment(comment) {
      this.sendAction('updateComment', comment)
    },

    toggle() {
      this.get('comment').toggleProperty('isEditing');
    }
  }
});
