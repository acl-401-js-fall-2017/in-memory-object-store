
var shortid = require('shortid');

class Bucket {
    constructor(food) {
        this.food = food;
    }

    getId() {
        const food_id = shortid.generate();
        return food_id;
    }

    attachId() {
        return this.food.getId();
    }
}

module.exports = Bucket;