import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',
  className: 'truncated-content',
  isExpanded: false,

  truncatedContent: Ember.computed('content', 'length', function() {
    let length = this.get('length'),
        content = this.get('content'),
        ellipsis = '...';

    if (content.length <= length) {
      ellipsis = '';
    }

    let truncateLength = length - ellipsis.length;

    return this.get('content').slice(0, truncateLength) + ellipsis;
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
