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

});