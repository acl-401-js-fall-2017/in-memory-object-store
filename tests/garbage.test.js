const assert = require('assert');
const GarbageCan = require('../lib/garbageConstructor');

describe('object store', () => {
    it('creates new object store', () => {
        const store = new GarbageCan();
        const garbage = { name: 'filth' };
        const saved = store.save(garbage);
        assert.ok(saved._id);
        const got = store.get(saved._id);
        assert.equal(saved.name, got.name);
    });

});