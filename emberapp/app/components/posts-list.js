import Ember from 'ember';

export default Ember.Component.extend({
  /*
   * Sort posts by createdAt in descending order
   */
  postsByCreatedAtDesc: Ember.computed.sort('posts', function(postA, postB) {
    let timeA = postA.get('createdAt').getTime(),
        timeB = postB.get('createdAt').getTime();

    if (timeA > timeB) {
      return -1;
    } else if (timeA < timeB) {
      return 1;
    }

    return 0;
  })
});
