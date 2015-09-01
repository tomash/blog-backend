export function initialize(container, application) {
  let authenticationService = application.__container__.lookup('service:authentication');

  let ajaxPrefilter = function(options) {
    let login = authenticationService.get('login'),
        password = authenticationService.get('password');

    if (login && password) {
      options.xhrFields = { withCredentials: true };
      options.username = login;
      options.password = password;
    }

    return true;
  }

  Ember.$.ajaxPrefilter('+*', ajaxPrefilter);
}

export default {
  auth: Ember.inject.service('authentication'),
  name: 'authentication-ajax-prefilter',
  initialize: initialize
};
