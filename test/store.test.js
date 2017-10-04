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
        it.skip('gets object with id', () => {
            let objectWithId = store.get(dog._id);

            assert.equal(objectWithId, dog);

        });

        it('gets object with no id', () => {
            let objectWithNoId = store.get();
            assert.equal(objectWithNoId, null);
        });

    });

});