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

    describe('getAll object function', ()=> {
        it('should return all the objects', () => {
            testStore.save({party: 'boring'});
            testStore.save({car:'red'});
            assert.equal(testStore.getAll(), testStore.storesList);   
        });
        it('should return empty array when no objects present', () => {
            assert.deepEqual(testStore.getAll(), []);   
        });
    });

    describe('remove object function',()=> {
        it('should remove object with that id', ()=>{
            const testParty = testStore.save({party: 'funky'});
            const testCar = testStore.save({car:'red'});
            testStore.remove(testParty._id);
            assert.deepEqual(testStore.storesList,[testCar]);
            
        });

    });
});