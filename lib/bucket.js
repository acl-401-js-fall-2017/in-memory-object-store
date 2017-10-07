
var shortid = require('shortid');

class Bucket {
    constructor() {
        this.list = [];
    }

    save(item) {
        const food_item = {
            name: item,
            _id: shortid.generate()
        };
        this.list.push(food_item);
        return food_item;
    }

    get(id) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i]._id == id) {
                return this.list[i];
            }
        }
        return null;
    }

    getAll() {
        return this.list;
    }

    remove(id) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i]._id === id) {
                this.list.splice(i, 1);
                return {removed: true};
            }
        }
        return {removed: false};
    }

    
}

module.exports = Bucket;