const assert = require('assert');
const Store = require('../lib/memoryObject');

describe('store in memory', () => {
    describe('operations',() =>{
        const newCar = {name: 'Honda'};
        let carStore = null;
        beforeEach(() => {
            carStore = new Store(newCar);

        });


        it('creates a new car and id', () => {
            carStore.save();
            assert.ok(newCar._id);
        });
    });
   
});


 