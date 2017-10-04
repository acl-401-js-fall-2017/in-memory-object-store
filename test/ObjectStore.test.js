//const shortid = require('shortid');
const assert = require('assert');

const obj1 = {
    name: 'shane'
};


class Store {
    constructor() {
        this.list = [];
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
        assert.deepEqual(typeof obj1.id, 'string');
    });
});