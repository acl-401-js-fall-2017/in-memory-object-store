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
        const originalLength = this.storesList.length;
        console.log('storesList in the beggining', this.storesList);
        const deleteIndex = this.storesList.findIndex((value) =>{
            return value._id === deleteId;
        });
        console.log('deleteIndex', deleteIndex);
        this.storesList.splice(deleteIndex,1);
        console.log('storesList after slice', this.storesList);
        if (originalLength === this.storesList.length) {
            return { removed: false };
        } else {
            return { removed: true };
        }
    }

}

module.exports = Store;
