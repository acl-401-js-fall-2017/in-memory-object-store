const shortid = require('shortid');

class Store {
    constructor() {
        this.storesList= [];
    }

    save(object) {
        object._id = shortid.generate();
        this.storesList.push(object);
        return object;
    }

    get(requestedId) {
        return this.storesList.find((value) =>{
            return value._id === requestedId;
        });
    }

    getAll() {
        return this.storesList.slice();
    }

    remove(deleteId) {
        const deleteIndex = this.storesList.findIndex((value) =>{
            return value._id === deleteId;
        });
        if (deleteIndex !== -1) {
            this.storesList.splice(deleteIndex,1);
            return { removed: true };
        } else {
            return { removed: false };
        }
    }
}

module.exports = Store;
