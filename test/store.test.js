'use strict';

const assert = require('assert');
const deepEqual = require('deep-equal');
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

    describe('.save', () => {

        let newItem = null;
        beforeEach(() => {
            newItem = testStore.save({ item: 'batteries', cost: 4.56 });
        });

        it('returns an object', () => {
            assert.equal(typeof newItem, 'object');
        });

        it('returns an object with the id property', () => {
            assert.ok(newItem.id);
        });

        it('returns the object given plus the new id returned', () => {
            assert.deepEqual(newItem, { item: 'batteries', cost: 4.56, id: newItem.id });
        });
    });

    describe('get methods', () => {

        let itemA = null,
            itemB = null,
            itemC = null;
        beforeEach(() => {
            itemA = testStore.save({ item: 'batteries', cost: 4.56 });
            itemB = testStore.save({ item: 'chocolate milk', cost: 2.5 });
            itemC = testStore.save({ item: 'banana', cost: 0.98 });
        });

        describe('.get', () => {
            it('returns the object with the id given', () => {
                assert.ok(
                    deepEqual(testStore.get(itemB.id), itemB)
                );
            });

            it('returns null if the id given does not exist', () => {
                assert.equal(testStore.get('badId'), null);
            });
        });

        describe('.getAll', () => {
            it('returns an array', () => {
                assert.ok(Array.isArray(testStore.getAll()));
            });

            it('returns an array holding three items', () => {
                assert.equal(testStore.getAll().length, 3);
            });

            it('returns an array holding the three objects saved', () => {
                let output = testStore.getAll();

                for(let i = 0; i < 3; i++) {
                    assert.ok( 
                        deepEqual(output[i], itemA) || 
                        deepEqual(output[i], itemB) || 
                        deepEqual(output[i], itemC) 
                    );
                }
            });
        });
    });

    describe('.remove', () => {

        let newItem = null;
        beforeEach(() => {
            newItem = testStore.save({ item: 'batteries', cost: 4.56 });
            
        });

        it('returns { remove: true } when a store is removable', () => {
            assert.deepEqual(testStore.remove(newItem.id), { remove: true });
        });

        it('returns { remove: false } when a bad id is given', () => {
            assert.deepEqual(testStore.remove('badId'), { remove: false });
        });

        it('successfully removes an item and makes it un-gettable', () => {
            testStore.remove(newItem.id);
            assert.equal(testStore.get(newItem.id), null);
        });
    });

    describe('.update', () => {
        
        let storedItem = null;
        let itemUpdate = null;
        beforeEach(() => {
            storedItem = testStore.save({ item: 'batteries', cost: 4.56 });
            itemUpdate = { item: 'batteries', cost: 5.50, id: storedItem.id };
        });

        it('returns the update object', () => {
            assert.equal(testStore.update(itemUpdate), itemUpdate);
        });

        it('returns an error when item given does not have an id', () => {
            assert.ok(testStore.update({ item: 'batteries', cost: 4.56 }) instanceof Error);
        });

        it('returns an error when the id of the item given does not exist', () => {
            itemUpdate.id = 'not an id';
            assert.ok(testStore.update(itemUpdate) instanceof Error);
        });

        it('successfully changes the item at the id given', () => {
            testStore.update(itemUpdate);
            let updatedItem = testStore.get(itemUpdate.id);

            assert.ok(
                !deepEqual(updatedItem, storedItem) &&
                deepEqual(updatedItem, itemUpdate)
            );
        });
    });
});