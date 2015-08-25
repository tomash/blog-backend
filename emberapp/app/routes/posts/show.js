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
      console.log("posts/show = ", post);

      if (confirm(`Do you really want to destroy post ${post.title}?`)) {
        post.destroyRecord().then(() => this.transitionTo('index'));
      }
    },

    createComment(comment) {
      console.log('create comment =', comment);
      comment.save().then(this.createAndSetComment.bind(this));
    }
  }
});
