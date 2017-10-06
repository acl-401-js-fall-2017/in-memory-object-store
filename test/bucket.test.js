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

    // it ('should return the object that has that id', () => {

    // });

    it ('should return null if the id does not exist', () => {
        const obj = bucket.save(food);
        const getObj = bucket.get(66); //assigning a random id number
        assert.equal(getObj, null);
    });

    it.skip ('should return an array of all objects', () => {
        const food2 = 'pizza';
        const food3 = 'beer';
        bucket.save(food);
        bucket.save(food2);
        bucket.save(food3);

        const getAllObj = bucket.getAll();
        // assert.equal(getAllObj[0].name, 'salad');
    });

    it ('should return an empty array from getAll when no objects', () => {
        const getAllObj = bucket.getAll();
        assert.deepEqual(getAllObj, []);
    });
    
    
});



// * `.get(<id>)`
// * returns the object that has that id
// * return `null` if that id does not exist
// * `.getAll()`
// * returns array of all objects
// * return empty array `[]` when no objects
// * `.remove(<id>)`
// * removes the object from the store that has that id
// * return `{ removed: true }` if the object was removed, else return `{ removed: false }` if the 
// object did not exist