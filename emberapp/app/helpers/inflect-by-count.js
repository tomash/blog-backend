import Ember from 'ember';
import {pluralize} from 'ember-inflector';

export function inflectByCount(params/*, hash*/) {
  let noun = params[0],
      count = params[1];

  if (count != 1) {
    return pluralize(noun);
  }

  return noun;
}

export default Ember.Helper.helper(inflectByCount);
