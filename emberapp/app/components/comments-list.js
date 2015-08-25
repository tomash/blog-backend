import Ember from 'ember';

export default Ember.Component.extend({
  /*
   * Show only comments that are saved
   */
  filteredComments: Ember.computed.filter('comments', function(comment, index, array) {
    return !comment.get('isNew');
  }),

  /*
   * Sort comments by createdAt in descending order
   */
  orderedComments: Ember.computed.sort('filteredComments', function(commentA, commentB) {
    let timeA = commentA.get('createdAt').getTime(),
        timeB = commentB.get('createdAt').getTime();

    if (timeA > timeB) {
      return -1;
    } else if (timeA < timeB) {
      return 1;
    }

    return 0;
  })
});
