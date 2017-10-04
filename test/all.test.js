const assert = require('assert');
const Fridge = require('../all');

describe('store methods', () => {

    const beer = {name: 'Cantillon'};
    let myFridge = null;
    beforeEach(() => {
        myFridge = new Fridge ();
    });
    it('should create an id on the object and return it', () => {
        let savedBeer = myFridge.save(beer);
        assert.ok(savedBeer);
    });
    it('should return the object with an id, else null', () => {
        let matchedBeer = myFridge.get(beer._id);
        assert.ok(matchedBeer);
    });
    // it('should return array of all objects, else empty', () => {
    //     myFridge.getAll();
    //     assert.ok(myFridge);
    // });
    // it('should remove object with said id', () => {
    //     myFridge.remove();
    //     assert.ok(myFridge.beer._id);
    // });
});