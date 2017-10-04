'use strict';

// class Store blueprint (collection of tools)

class Store {
    constructor() {
        this.list = [];
    }

    save(object) {
        this.list.push(object);
    }
}