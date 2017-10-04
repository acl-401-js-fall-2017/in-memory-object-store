const shortid = require('shortid');

// class Store blueprint (collection of tools)

class Store {
    constructor() {
        this.list = [];
    }

    save(object) {
        object._id = shortid.generate();
        this.list.push(object);
        return object;
    }
}
module.exports = Store;