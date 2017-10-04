const store = require('../store');
const assert = require('assert');

describe('memory store', ()=>{
    let testStore = null;
    beforeEach(() => {
        testStore = new store;
    });

    describe('save function',()=>{
        it('should generate id\'s',()=>{
            const savedObject = testStore.save({party: 'cool'});
            assert.ok(savedObject._id); 
        });
    });

    describe('get object function', ()=> {
        it('should return the object with the id', ()=>{
            const testParty = testStore.save({party: 'funky'});
            assert.equal(testStore.get(testParty._id),testParty);
        });
    });
});