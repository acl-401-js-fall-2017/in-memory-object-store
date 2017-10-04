'use strict';

const uniqid = require('uniqid');

class Store {

    // should create an empty Store object with an empty dictionary object for products
    constructor() {
        this.warehouse = {};
    }
    
    // create an id for new object
    // save object to store
    // returns obj + new id
    save(obj) {
        obj.id = uniqid();
        this.warehouse[obj.id] = obj;
        return obj;
    }

    // returns the obj with its id
    // if obj does not exist, return null
    get(id) {
        return this.warehouse[id] ? this.warehouse[id] : null;
    }

    // returns an array holding all objects
    // if no objects, returns []
    getAll() {
        let inventoryList = [];
        for(let item in this.warehouse) {
            inventoryList.push(this.warehouse[item]);
        }
        return inventoryList;
    }

    // removes object from store with given id
    // if successful, return { removed: true }
    // else, return { removed: false }
    remove(id) {
        if(this.warehouse[id]) {
            delete this.warehouse[id];
            return { remove: true };
        }
        else return {remove: false};
    }

    // replaces object with given id with newObj provided by user
    // returns error if id not found in dictionary
    // returns newObj
    update(id, newObj) {

    }
}




module.exports = Store;