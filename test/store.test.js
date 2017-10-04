const assert = require('assert');
const Store = require('../lib/store');

describe('In-Memory Store', () => {
    let store = null;
    const dog = { name: 'Oscar', breed: 'boston terrier' };
    
    beforeEach( () => {
        store = new Store();
    });
    
    describe('Save', () => {
        it('generates id', () => {
            let dogObject = store.save(dog);
            
            assert.ok(dogObject._id);

        });

    });

    describe('Get', () => {
        it('gets object with id', () => {
            const dogObject = store.save(dog);
            let objectWithId = store.get(dogObject._id);

            assert.equal(objectWithId, dog);

        });

        it('gets object with no id', () => {
            let objectWithNoId = store.get();

            assert.equal(objectWithNoId, null);

        });

    });

    describe('Get All', () => {
        it('return all objects', () => {
            let newObjectArray = store.getAll();

            assert.deepEqual(store.storeList, newObjectArray );
        });

        it('return empty object array', () => {
            let emptyArray = store.getAll([]);

            assert.deepEqual(emptyArray, []);
        });
    
    });

    describe('removes id', () => {
        it('remove object with id', () => {
            store.save(dog);
            let removeObject = store.remove(dog._id);

            assert.deepEqual(removeObject, { removed: true } );
        });

        it('id does not exist', () => {
            let removeResult = store.remove('does not exist');

            assert.deepEqual(removeResult, { removed: false });
        });

    });

});