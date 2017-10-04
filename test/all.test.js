const assert = require('assert');
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
    it('should return the object with an id, else null', () => {
        fridgeInteraction.get();
        assert.ok(fridgeInteraction.beer._id);
    });

});