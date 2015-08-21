import Ember from 'ember';

export default Ember.Component.extend({
  title: Ember.computed.alias('post.title'),
  body: Ember.computed.alias('post.body'),

  classNames: ['post-form']
});
