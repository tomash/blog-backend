import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('truncate-with-expand', 'Integration | Component | truncate with expand', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{truncate-with-expand}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#truncate-with-expand}}
      template block text
    {{/truncate-with-expand}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
