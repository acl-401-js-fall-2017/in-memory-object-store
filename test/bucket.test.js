const assert = require('assert');
const Bucket = require('../lib/bucket');




describe ('testing constructor function', () => {
    const food = 'salad';
    let bucket = null;

    beforeEach(function () {
        bucket = new Bucket();
    });
    

    it ('should create an id property', () => {
        const obj = bucket.save(food);
        const id = obj._id;
        assert.ok(id); 
    });


    it ('should check to make sure the object was saved', () => {
        const obj = bucket.save(food);
        const getObj = bucket.get(obj._id);
        assert.deepEqual(getObj, obj);
    });

    

    it ('should return null if the id does not exist', () => {
        bucket.save(food);
        const getObj = bucket.get(66); //assigning a random id number
        assert.equal(getObj, null);
    });


    it.only ('should return an array of all objects', () => {
        const food2 = 'pizza';
        const food3 = 'beer';
        bucket.save(food);
        bucket.save(food2);
        bucket.save(food3);

        const getAllObj = bucket.getAll();
        const mappedArray = getAllObj.map((obj) => {
            return obj.name;
        });
        assert.deepEqual(mappedArray, ['salad', 'pizza', 'beer']);
    });


    it ('should return an empty array from getAll when no objects', () => {
        const getAllObj = bucket.getAll();
        assert.deepEqual(getAllObj, []);
    });


    it ('should return True if an object has been removed by id', () => {
        const obj = bucket.save(food);
        const remObj = bucket.remove(obj._id);
        assert.deepEqual(remObj, {removed: true});
        const getAllObj = bucket.getAll();
        assert.deepEqual(getAllObj, []);
    });
    

    it ('should return False if obj being removed does not exist', () => {
        const remObj = bucket.remove(67);
        assert.deepEqual(remObj, {removed: false});
    });
    
});

