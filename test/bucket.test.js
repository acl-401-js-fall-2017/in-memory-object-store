const assert = require('assert');
var shortid = require('shortid');
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
    
    
});

// creates an `_id` property on the object
  // * returns `objectToSave` with added `_id` property