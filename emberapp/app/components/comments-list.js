import Ember from 'ember';

export default Ember.Component.extend({
  /*
   * Show only comments that are saved
   */
  filteredComments: Ember.computed.filterBy('comments', 'isNew', false),

  /*
   * Sort comments by createdAt in descending order
   */
  orderedComments: Ember.computed.sort('filteredComments', function(commentA, commentB) {
      let timeA = commentA.get('createdAt').getTime(),
          timeB = commentB.get('createdAt').getTime();

    return -Ember.compare(timeA, timeB);
  })
});
