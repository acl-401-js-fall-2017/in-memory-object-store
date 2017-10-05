const assert = require('assert');
const Fridge = require('../all');

describe('store', () => {
    describe('CRUD', () => {
        let fridge = null;
        beforeEach(() => {
            fridge = new Fridge();
        });

        it('adds _id to saved beer', () => {
            const beer = { name: 'Violet Mer', brewery: 'de Garde' };
            const saved = fridge.save(beer);
            assert.ok(saved._id);
        });

        it('gets a saved beer', () => {
            const beer = { name: 'Violet Mer', brewery: 'de Garde' };
            const saved = fridge.save(beer);
            const got = fridge.get(saved._id);
            assert.deepEqual(got, saved);        
        });

        it('returns null if get id not found', () => {
            const got = fridge.get('bad id');
            assert.strictEqual(got, null);
        });

        it('removes an object', () => {
            const beer = { name: 'Violet Mer', brewery: 'de Garde' };
            const saved = fridge.save(beer);

            const status = fridge.remove(saved._id);
            assert.equal(status.removed, true);

            const got = fridge.get(saved._id);
            assert.equal(got, null);
        });
        
        it('returns { removed: false } when object to remove not exists', () => {
            const status = fridge.remove('bad id');
            assert.equal(status.removed, false);
        });
    });
});