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
        assert.ok(newStore.list[0]._id);
        assert.equal(objectToSave.name, newStore.list[0].name);
    });

    it('gets object from store', () => {
        let objectToSave = {name: 'mold'};
        const getId = newStore.save(objectToSave).id;
        const objectToGet = newStore.get(getId);
        assert.equal(objectToSave.name, objectToGet.name);
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