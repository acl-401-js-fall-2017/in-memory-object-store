const shortid = require('shortid');

class Store {
    constructor() {
        this.list = [];
    }

    save(object) {
        object._id = shortid.generate();
        this.list.push(object);
        return object;
    }

    get(_id) {
        return this.list[_id];
    }
}
module.exports = Store;