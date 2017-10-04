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
        let dust = {name: 'dust'};
        let slime = {name: 'slime'};
        newStore.save(slime);
        newStore.save(dust);
        const savedObject = newStore.save(objectToSave);
        const retrievedObject = newStore.get(savedObject._id);
        assert.deepEqual(retrievedObject, savedObject);
    });

    it('returns null when id is invalid', () => {
        const brokenGet = newStore.get('brokenId');
        assert.equal(brokenGet, null);
    });

    it('saves to and gets object from store', () => {
        const garbage = { name: 'filth' };
        const saved = newStore.save(garbage);
        assert.ok(saved._id);
        const got = newStore.get(saved._id);
        assert.equal(saved.name, got.name);
    });

    it('removes object by id', () => {
        const objectToSave = { name: 'grime' };
        const idToRemove = newStore.save(objectToSave)._id;
        const wasRemoved = newStore.remove(idToRemove);
        assert.deepEqual(wasRemoved, { removed: true });
    });

    it('returns false value on invalid id', () => {
        const idToRemove = 'brokenId';
        const wasRemoved = newStore.remove(idToRemove);
        assert.deepEqual(wasRemoved, { removed: false });
    });

    it('returns array of all objects', () => {
        const mold = { name: 'mold' };
        const poison = { name: 'poison' };
        const grime = { name: 'grime' };

        newStore.save(mold);
        newStore.save(poison);
        newStore.save(grime);

        const allObjects = newStore.getAll();

        assert.equal(allObjects.length, 3);
    });

    it('returns empty array when no objects are present', ()=>{
        const allObjects = newStore.getAll();
        assert.deepEqual(allObjects, []);
    });


});