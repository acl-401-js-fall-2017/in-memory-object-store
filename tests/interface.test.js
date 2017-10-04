const assert = require('assert');
const ObjectStore = require('../lib/interface');

describe('object store', () => {
    it('creates new object store', () => {
        const store = new ObjectStore('filth');
        const garbage = { name: 'filth' };
        const saved = store.save(garbage);
        assert.ok(saved._id);
        const got = store.get(saved._id);
        assert.equal(saved.name, got.name);
    });

});