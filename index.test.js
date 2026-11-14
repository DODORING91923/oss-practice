const test = require('node:test');
const assert = require('node:assert');
const { add } = require('./index');

test('두 숫자를 더하면 합계를 반환한다', () => {
  assert.strictEqual(add(2, 3), 5);
});
