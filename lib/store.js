const shortid = require('shortid');

// class Store blueprint (collection of tools)

class Store {
    constructor() {
        this.list = [];
    }

    // generate an id for each object and save it
    save(object) {
        object._id = shortid.generate();
        this.list.push(object);
        return object;
    }

    // return object with the id
    get(id) {
        return id;
    }

    // return all objects with ids
    getAll(object) {
        return object;
    }
    // remove object based on id
    remove(id) {
        if(this.list[id]) {
            delete this.list[id];
            return {removed: true};
        } else {
            return {removed: false};
        }
    }
}
module.exports = Store;