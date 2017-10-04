const assert = require('assert');
// const uniqid = require('uniqid');
const Fridge = require('../all');

describe('store methods', () => {

    const beer = {name: 'Cantillon'};
    let fridgeInteraction = null;
    beforeEach(() => {
        fridgeInteraction = new Fridge (beer);
    });
    it('should create an id on the object and return it', () => {
        fridgeInteraction.save();
        assert.ok(fridgeInteraction.beer._id);
    });

});