const shortid = require('shortid');
const dataArr = [];

class Store {
    constructor(obj) {
        this.obj = obj;
    }

    save() {
        this.obj._id = shortid.generate();
        dataArr.push(this.obj);
        return this.obj;   
    }

    get(id) {
        const found = dataArr.find(item => item._id === id);
        return found || null;
    }

    remove(id) {
        const index = dataArr.findIndex(item => item._id === id);
        if( index === -1){ return { removed: false};}
        dataArr.splice(index, 1);
        return { removed: true };
    }

    getAll() {
        return dataArr;
    }

}


module.exports = Store;