const assert = require('assert');
const Store = require('../lib/memoryObject');

describe('store in memory', () => {
    
    describe('operations',() =>{
        let store = null;
        beforeEach(() => {
            store = new Store(); 
        });

        it('saves a new car object and creates a unique id', () => {
            const car = {make: 'Honda',model:'Civic'};
            let savedCar = store.save(car);
            assert.ok(savedCar._id);
        });

        it('finds car by id and returns object', () => {
            const car = {make: 'Honda',model:'Civic'};
            let savedCar = store.save(car);
            let fetched = store.get(savedCar._id);
            assert.equal(fetched, savedCar);
        });

        it('returns null if car id does not exist', () =>{
            let foundCar = store.get('invalid_id');
            assert.equal(foundCar, null);
        });

        it('removes a car with given id', () => {
            const car = {make: 'Honda',model:'Civic'};
            let savedCar = store.save(car);
            let removedCar = store.remove(savedCar._id);
            assert.equal(removedCar.removed, true); //???
        });

        it('returns {removed: false} with invalid id', () => {
            let removedCar = store.remove('invalid_id');
            assert.equal(removedCar.removed, false); // ???
        });

        it('fetches the number of all objects saved in db', () => {
            const car1 = store.save({make: 'Honda',model:'Civic'});
            const car2 = store.save({make: 'Toyota',model:'Corolla'});
            const allCars = store.getAll();
            assert.deepEqual(allCars.length,2);    
        });
    
    });
      
});