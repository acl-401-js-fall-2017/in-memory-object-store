const shortid = require('shortid');

class Store {
    constructor() {
        this.list = [];
    }
    save(obj) {
        obj.id = shortid.generate();
        this.list.push(obj);
        return obj;
    }
    get(id) {
        var index = this.list.findIndex(function(x){
            return id === x.id;
        });
        return this.list[index];
    }
    getAll() {
        return this.list.slice();
    }
    remove(id) {
        let listSize = this.list.length;
        let list = this.list.filter(function(x){
            return x.id !== id;
        });

        this.list = list;
        if(listSize === this.list.length){
            return false;
        } else {
            return true;
        }
    }
}

module.exports = Store;