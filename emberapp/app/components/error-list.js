import Ember from 'ember';

export default Ember.Component.extend({
  // this does not work, don't know why, fallbacking to named params :(
  // positionalParams: ['model', 'attribute'],

  tagName: 'span'
});
