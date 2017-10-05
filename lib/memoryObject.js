const shortid = require('shortid');

class Store {
    constructor() {
        this.data = [];
    }

    save(obj) {
        obj._id = shortid.generate();
        this.data.push(obj);
        return obj;   
    }

    get(id) {
        const found = this.data.find(item => item._id === id);
        return found || null;
    }

    remove(id) {
        const index = this.data.findIndex(item => item._id === id);
        if( index === -1){ return { removed: false};}
        this.data.splice(index, 1);
        return { removed: true };
    }

    getAll() {
        return this.data;
    }

}


module.exports = Store;