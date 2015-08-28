export function initialize(container, application) {
  application.inject('route', 'auth', 'service:authentication');
  application.inject('component', 'auth', 'service:authentication');
  application.inject('controller', 'auth', 'service:authentication');
}

export default {
  name: 'authentication',
  initialize: initialize
};
