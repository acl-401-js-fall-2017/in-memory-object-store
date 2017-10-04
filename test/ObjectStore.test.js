const assert = require('assert');
// eslint-disable-next-line
const shortid = require('shortid');
// eslint-disable-next-line
const Store = require('../lib/store');


// const fullback = { name: 'brooks', height: '76in'};
// const midfielder = { name: 'iniesta', height: '67in'};
// const forward = { name: 'wood', height: '70in'};

// before each test, create a new store
describe('memory store', function(){
    // eslint-disable-next-line
    let store = null;
    
    beforeEach(() => {
        store = new Store ();
    });
    
    describe('save object with an id', () => {
        it('generates an id', () => {
            let goalieObj = store.save({ name: 'howard', height: '75in'});
            // eslint-disable-next-line
            assert.ok(goalieObj._id);
        });
    });
    describe('get object with the id', () => {
        it('gets and returns the object with its id', () => {
            const goalieObj = store.save({ name: 'howard', height: '75in'});
            let goalieObjWithId = store.get(goalieObj._id);
            assert.ok(goalieObjWithId, goalieObj);
        });

        it('gets and returns null if object does not have an id', () => {
            let goalieObjWithoutId = store.get();
            assert.equal(goalieObjWithoutId, null);
        });
    });

    describe('get all objects ', () => {
        it('gets and returns an array of all objects', () => {
            const goalieObj = store.save({ name: 'howard', height: '75in'});
            let goalieObjGetAll = store.getAll(goalieObj);
            assert.ok(goalieObjGetAll, goalieObj);
        });
        
        it('gets and returns null if object does not have an id', () => {
            let goalieObjGetAll = store.getAll([]);
            assert.deepEqual(goalieObjGetAll, []);
        });
    });

    describe('remove an object', () => {
        it('removes an object from the array', () => {
            const goalieObj = store.save({ name: 'howard', height: '75in'});
            let goalieObjRemove = store.remove(goalieObj._id);
            assert.ok(goalieObjRemove, goalieObj._id);

        });
    });
});
