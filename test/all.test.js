const assert = require('assert');
const Fridge = require('../all');

describe('fridge', () => {
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
    describe('get all', () => {
        
        let fridge = null;
        before(() => {
            fridge = new Fridge();
        });

        it('returns empty array on new fridge', () => {
            assert.deepEqual(fridge.getAll(), []);
        });

        it('returns list of saved beers', () => {
            const beer1 = fridge.save({ name: 'Juicy Jr.' });
            const beer2 = fridge.save({ name: 'Blueberry Muffin' });
            const beers = fridge.getAll();
            assert.deepEqual(beers, [beer1, beer2]);
        });

        it('does not return actual fridge array', () => {
            const beers = fridge.getAll();
            beers.push({ name: 'should be in fridge' });
            assert.equal(fridge.getAll().length, 2);
        });
    });
});