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
        return this.warehouse[id] ? Object.assign({}, this.warehouse[id]) : null;
    }

    // returns an array holding all objects
    // if no objects, returns []
    getAll() {
        let inventoryList = [];
        for(let id in this.warehouse) {
            inventoryList.push(
                Object.assign({}, this.warehouse[id])
            );
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

    // modifies object with same id as objUpdate
    // returns error if id not found in dictionary
    // returns objUpdate
    update(objUpdate) {
        if(!objUpdate.id) return new Error('item missing id property');
        if(this.warehouse[objUpdate.id]) {
            this.warehouse[objUpdate.id] = objUpdate;
            return objUpdate;
        }
        else {
            return new Error('id not found');
        }
    }
}


module.exports = Store;