
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

    

    
}

module.exports = Bucket;