const shortid = require('shortid');

class Store {
    constructor() {
        this.list = {};
    }

    save(object) {
        object._id = shortid.generate();
        this.list[object._id] = object;
        return object;
    }

    get(id) {
        return this.list[id];
    }

    getAll(object) {
        return object;
    }
}
module.exports = Store;