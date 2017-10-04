const assert = require('assert');
const GarbageCan = require('../lib/garbageConstructor');

describe('object store', () => {
    //TODO: integrate beforeEach hook
    it.only('creates new store', () => {
        let newStore = new GarbageCan;
        assert.deepEqual(newStore.list, []);
    });

    it('saves to and gets object from store', () => {
        const store = new GarbageCan();
        const garbage = { name: 'filth' };
        const saved = store.save(garbage);
        assert.ok(saved._id);
        const got = store.get(saved._id);
        assert.equal(saved.name, got.name);
    });

});