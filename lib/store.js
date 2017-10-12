const shortid = require('shortid');

class Store {
    constructor() {
        this.data = {};
    }

    save(object) {
        object._id = shortid.generate();
        this.data[object._id] = object;
        return object;
    }

    get(id) {
        return this.data[id];
    }

    getAll(object) {
        return object;
    }

    remove(id) {
        if (this.data[id]) {
            delete this.data[id];
            return { removed: true };
        } 
        else {
            return { removed: false };
        }
    }
}
module.exports = Store;