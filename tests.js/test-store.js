const store = require('../store');
const assert = require('assert');

describe('memory store', ()=>{
    // beforeEach( (store)=> {
    //     store.storeList =[];
    // });

    describe('save function',()=>{
        it('should generate id\'s',()=>{
            const savedObject = store.save({party: 'cool'});
            assert.ok(savedObject._id); 
        });
    });

    describe('get object function', ()=> {
        const testParty = store.save({party: 'funky'});
        store.save({ party: 'lame'});
        it('should return the object with the id', ()=>{
            assert.equals(store.get(testParty._id),testParty);


        });
    });
});