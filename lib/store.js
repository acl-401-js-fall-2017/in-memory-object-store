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

    remove(id) {
        if (this.list[id]) {
            delete this.list[id];
            return { removed: true };
        } 
        else {
            return { removed: false };
        }
    }
}
module.exports = Store;