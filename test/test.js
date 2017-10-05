const assert = require('assert');
const Store = require('../lib/store');

describe('store', () => {
    let store = null;
    const book = { name: 'Harry Potter'};

    beforeEach(() => {
        store = new Store();
    });

    describe('Save', () => {
        it('saves an object with an id', () => {
            let saved = store.save(book);
            
            assert.ok(saved._id);
        });

    });

    describe('Get', () => {
        it('gets object by id', () => {
            const saved = store.save(book);
            let objectId = store.get(saved._id);

            assert.equal(objectId, book);

        });

        it('gets object without an id', () => {
            let objectNoID = store.get();

            assert.equal(objectNoID, null);

        });

    });

    describe('Get All', () => {
        it('returns all of the objects', () => {
            let newObjectArray = store.getAll();

            assert.deepEqual(store.storeList, newObjectArray );
        });

        it('return empty object array', () => {
            let emptyArray = store.getAll([]);

            assert.deepEqual(emptyArray, []);
        });
    
    });

    describe('removes id', () => {
        it('removes the id from an an object', () => {
            store.save(book);
            let removeById = store.remove(book._id);

            assert.deepEqual(removeById, { removed: true } );
        });

        it('returns false when Id of obj to remove doesnt exist', () => {
            let removeStatus = store.remove('does not exist');

            assert.deepEqual(removeStatus, { removed: false });
        });

    });

});

   
   