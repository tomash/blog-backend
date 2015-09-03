import Ember from 'ember';

export function initialize(container, application) {
  let sessionService = application.__container__.lookup('service:session');

  let ajaxPrefilter = function(options, originalOptions, xhr) {
    let authToken = sessionService.get('authToken');

    if (authToken) {
      options.headers = { 'X-Token': authToken };
    }

    return true;
  };

  Ember.$.ajaxPrefilter('+*', ajaxPrefilter);
}

export default {
  session: Ember.inject.service('session'),
  name: 'session-ajax-prefilter',
  initialize: initialize
};
