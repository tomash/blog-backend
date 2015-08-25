import Ember from 'ember';

export default Ember.Component.extend({
  /*
   * Sort comments by createdAt in descending order
   */
  orderedComments: Ember.computed.sort('comments', function(commentA, commentB) {
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
