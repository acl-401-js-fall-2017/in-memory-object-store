const Store = require('../lib/store');
const assert = require('assert');
let obj1;
let obj2;
let store = null; 


beforeEach(function () {//Creates store unique object before each test.
    obj1 = {
        name: 'shane'
    };
    obj2 = {
        name: 'nikki'
    };
    store = new Store();
});

describe('Make Store', () => {
    it('Makes new store', () => {
        assert.deepEqual(store.list, []);
    });
    it('Save Method', () => {
        store.save(obj1);
        assert.deepEqual(typeof obj1.id, 'string');
    });
    it('get Method', () => {
        store.save(obj1);
        var obj = store.get(obj1.id);
        assert.deepEqual(obj, obj1);
    });
    it('getAll Method', () => {
        store.save(obj1);
        store.save(obj2);
        assert.deepEqual(store.getAll(), [obj1,obj2]);
    });
    it('remove Method', () => {
        store.save(obj1);
        store.save(obj2);
        assert.deepEqual(store.remove(obj1.id), true);
    });
    it('remove Method2', () => {
        store.save(obj1);
        store.save(obj2);
        store.remove(obj1.id);
        assert.deepEqual(store.list, [obj2]);
    });
});