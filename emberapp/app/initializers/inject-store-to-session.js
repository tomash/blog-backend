export function initialize(container, application) {
  application.inject('service:session', 'store', 'service:store');
}

export default {
  name: 'inject-store-to-session',
  initialize: initialize,
  after: 'ember-data'
};
