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
        bucket.getId();
        assert.ok(true); 
    });
    
    it.skip ('should attach an id to the object', () => {
        bucket.food.attachId();
        assert.ok(true);
        // const cow = bucket.push(food);

    });
});

// creates an `_id` property on the object
  // * returns `objectToSave` with added `_id` property