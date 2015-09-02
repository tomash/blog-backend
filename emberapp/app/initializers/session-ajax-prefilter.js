import Ember from 'ember';

export function initialize(container, application) {
  let sessionService = application.__container__.lookup('service:session');

  let ajaxPrefilter = function(options, originalOptions, xhr) {
    let authToken = sessionService.get('authToken');

    // console.log("xhr = ", xhr);
    // console.log("options = ", options);
    // console.log("originalOptions = ", originalOptions);
    if (authToken) {
      options.headers = { 'X-Token': authToken };
      // console.log("setting X-Token to ", authToken);
      // xhr.setRequestHeader('X-Token', authToken);
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
