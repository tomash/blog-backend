import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  setupController(controller, post) {
    controller.set('post', post);

    this.createAndSetComment();
  },

  /*
   * Creates new 'comment' record and sets it in controller as newComment
   */
  createAndSetComment() {
    let newComment = this.store.createRecord('comment', {});

    this.controller.set('newComment', newComment);
  },

  actions: {
    destroyPost(post) {
      if (confirm(`Do you really want to destroy post '${post.title}'?`)) {
        post.destroyRecord().then(() => this.transitionTo('index'));
      }
    },

    createComment(comment) {
      comment.save().then(this.createAndSetComment.bind(this));
    },

    updateComment(comment) {
      comment.save().then(() => comment.set('isEdited', false));
    },

    destroyComment(comment) {
      if (confirm("Do you really want to destroy this comment?")) {
        comment.destroyRecord().then(() => console.log('destroyed in route'));
      }
    }
  }
});
