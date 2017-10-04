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

    
}

module.exports = Store;
