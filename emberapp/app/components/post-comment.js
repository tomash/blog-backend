import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['post-comment'],

  isEdited: Ember.computed.and('session.isSignedIn', 'comment.isEdited'),

  actions: {
    updateComment(comment) {
      this.sendAction('updateComment', comment);
    },

    destroyComment() {
      let comment = this.get('comment');

      this.sendAction('destroyComment', comment);
    },

    toggle() {
      this.get('comment').toggleProperty('isEdited');
    }
  }
});
