import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['text-muted'],
  classNameBindings: ['minNotReached:text-danger'],
  label: false,

  actualChars: Ember.computed('value', function() {
    let value = this.get('value') || '';

    return value.length;
  }),

  remainingChars: Ember.computed('actualChars', 'maxLength', function() {
    return this.get('maxLength') - this.get('actualChars');
  }),

  minNotReached: Ember.computed('actualChars', 'minLenght', function() {
    return this.get('actualChars') < this.get('minLength');
  })
});
