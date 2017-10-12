const assert = require('assert');
// eslint-disable-next-line
const Store = require('../lib/store');

// before each test, create a new store
describe('memory store', function(){
    // eslint-disable-next-line
    let store = null;
    
    beforeEach(() => {
        store = new Store ();
    });
    
    describe('save object with an id', () => {
        it('generates an id', () => {
            const goalieObj = store.save({ name: 'howard', height: '75in'});
            // eslint-disable-next-line
            assert.ok(goalieObj._id);
        });
    });
    describe('get object with the id', () => {
        it('gets and returns the object with its id', () => {
            const goalieObj = store.save({ name: 'howard', height: '75in'});
            const goalieObjWithId = store.get(goalieObj._id);
            assert.ok(goalieObjWithId, goalieObj);
        });

        it('gets and returns null if object does not have an id', () => {
            const goalieObjWithoutId = store.get();
            assert.equal(goalieObjWithoutId, null);
        });
    });

    describe('get all objects ', () => {
        it('gets and returns an array of all objects', () => {
            const goalieObj = store.save({ name: 'howard', height: '75in'});
            const goalieObjGetAll = store.getAll(goalieObj);
            assert.equal(goalieObjGetAll, goalieObj);
        });
        
        it('gets and returns null if object does not have an id', () => {
            const goalieObjGetAll = store.getAll([]);
            assert.deepEqual(goalieObjGetAll, []);
        });
    });

    describe('remove an object', () => {
        it('removes an object from the array', () => {
            const goalieObj = store.save({ name: 'howard', height: '75in'});
            const goalieObjRemove = store.remove(goalieObj._id);
            assert.ok(goalieObjRemove, goalieObj._id);

        });
    });
});
