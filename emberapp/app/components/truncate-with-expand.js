import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  className: 'truncated-content',
  isExpanded: false,

  isTruncationNeeded: Ember.computed('content', 'length', function() {
    let length = this.get('length'),
        content = this.get('content');

    return content.length > length;
  }),

  truncatedContent: Ember.computed('content', 'length', function() {
    let length = this.get('length'),
        content = this.get('content'),
        ellipsis = '...',
        truncationLength = length - ellipsis.length;

    return content.slice(0, truncationLength) + ellipsis;
  }),

  actions: {
    expand() {
      this.set('isExpanded', true);
    },

    collapse() {
      this.set('isExpanded', false);
    }
  }
});
