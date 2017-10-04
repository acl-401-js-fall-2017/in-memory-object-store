'use strict';

const assert = require('assert');
const Store = require('../lib/store');

let testStore = {};

describe('Store class', () => {

    beforeEach(() => {
        testStore = new Store();
    });

    describe('constructor', () => {
        it('creates an object with access to empty warehouse property', () => {
            assert.deepEqual(testStore.warehouse, {});
        });
    });


});