const shortid = require('shortid');
const assert = require('assert');

const obj1 = {
    name: 'shane'
};
const obj2 = {
    name: 'nikki'
};


class Store {
    constructor() {
        this.list = [];
    }
    save(obj) {
        obj.id = shortid.generate();
        this.list.push(obj);
        return obj;
    }
    get(id) {
        var index = this.list.findIndex(function(x){
            return id === x.id;
        });
        return this.list[index];
    }
}

let store = null; 
beforeEach(function () {//Creates store unique object before each test.
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
});