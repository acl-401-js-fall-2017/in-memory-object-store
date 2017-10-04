'use strict';

class Store {

    // should create an empty Store object with an empty dictionary object for products
    constructor() {
        this.warehouse = {};
    }
    
    // create an id for new object
    // save object to store
    // returns obj + new id
    save(obj) {

    }

    // returns the obj with its id
    // if obj does not exist, return null
    get(id) {

    }

    // returns an array holding all objects
    // if no objects, returns []
    getAll() {

    }

    // removes object from store with given id
    // if successful, return { removed: true }
    // else, return { removed: false }
    remove(id) {

    }

    // replaces object with given id with newObj provided by user
    // returns error if id not found in dictionary
    // returns newObj
    update(id, newObj) {

    }
}




module.exports = Store;