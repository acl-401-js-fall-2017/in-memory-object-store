const assert = require('assert');
const Store = require('../lib/memoryObject');

describe.skip('store in memory', () => {
    describe('operations',() =>{
        const car = {make: 'Honda',model:'Civic'};
        let store = null;
        beforeEach(() => {
            store = new Store(car);
        });

        it('creates a new car and id', () => {
            store.save();
            assert.ok(car._id);
        });

        it('finds car by id and returns object', () => {
            let foundCar = store.get(car._id);
            assert.equal(foundCar, car);
        });

        it('returns null if car id does not exist', () =>{
            let foundCar = store.get('invalid_id');
            assert.equal(foundCar, null);
        });

        it('removes a car with given id', () => {
            let removedCar = store.remove(car._id);
            assert.equal(removedCar.removed, true);
        });

        it('returns {removed: false} with invalid id', () => {
            let removedCar = store.remove('invalid_id');
            assert.equal(removedCar.removed, false);
        });
    });
    
    describe('get all',() => {
        let store = null;
        before(() => {
            store = new Store();
        });
        
        it('get all', () => {
            const car1 = new Store({make: 'Honda',model:'Civic'});
            const car2 = new Store({make: 'Toyota',model:'Corolla'});
            store.save();
            const allCars = store.getAll();
            assert.deepEqual(allCars,[car1,car2]);    
        });
    });
   
});


 