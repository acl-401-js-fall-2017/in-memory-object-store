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
        console.log('store list', this.storesList);
        return this.storesList;
    }

}

module.exports = Store;
