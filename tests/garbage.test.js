const assert = require('assert');
const GarbageCan = require('../lib/garbageConstructor');

describe('object store', () => {
    let newStore = null;
    beforeEach(() => {
        newStore = new GarbageCan();
    });
    
    it('creates new store', () => {
        assert.deepEqual(newStore.list, []);
    });

    it('saves object to store', () => {
        let objectToSave = {name: 'mold'};
        newStore.save(objectToSave);
        assert.equal(typeof newStore.list.id, 'string');
        assert.deepEqual(objectToSave.name, newStore.name);
    });

    it.skip('gets object from store', () => {
        const getMe = {name: 'poison', _id: 'foo'};
        const retrievedObject = newStore.get('foo');
        assert.deepEqual(retrievedObject, getMe);
    });

    it.skip('saves to and gets object from store', () => {
        const store = new GarbageCan();
        const garbage = { name: 'filth' };
        const saved = store.save(garbage);
        assert.ok(saved._id);
        const got = store.get(saved._id);
        assert.equal(saved.name, got.name);
    });

});