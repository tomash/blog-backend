import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  className: 'truncated-content',
  isExpanded: false,

  truncatedContent: Ember.computed('content', 'length', function() {
    let length = this.get('length');
    let truncateLength = length - '...'.length;

    return this.get('content').slice(0, truncateLength) + '...';
  }),

  actions: {
    expand() {
      this.set('isExpanded', true)
    },

    collapse() {
      this.set('isExpanded', false)
    }
  }
});
