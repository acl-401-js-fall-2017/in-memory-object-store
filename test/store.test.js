'use strict';

const assert = require('assert');
const Store = require('../lib/store');

let testStore = null;

describe('Store class', () => {

    beforeEach(() => {
        testStore = new Store();
    });

    describe('constructor', () => {
        it('creates an object', () => {
            assert.ok(testStore);
        });

        it('creates an object with access to a warehouse property', () => {
            assert.ok(testStore.warehouse);
        });
    });

    describe('.save method', () => {

        let newItem = null;
        beforeEach(() => {
            newItem = testStore.save({ item: 'batteries', cost: 4.56 });
        });

        it('returns an object', () => {
            assert.ok(typeof newItem === 'object');
        });

        it('returns an object with the id property', () => {
            assert.ok(newItem.id);
        });
    });
});