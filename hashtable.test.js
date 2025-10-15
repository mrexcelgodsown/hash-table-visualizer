// hashtable.test.js
const HashTable = require('./hashtable');
test('Inserts and searches correctly', () => {
  const ht = new HashTable();
  ht.insert('apple', 'fruit');
  expect(ht.search('apple')).toBe('fruit');
  expect(ht.search('banana')).toBeNull();
});
