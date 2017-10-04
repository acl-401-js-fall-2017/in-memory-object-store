const uniqid = require('uniqid');
const fridgeArr = [];

class Fridge {
    constructor(beer) {
        this.beer = beer;
    }
    save() {
        this.beer._id = uniqid();
        fridgeArr.push(this.beer);
        return this.beer;
    }
    get() {
        this.beer._id ? this.beer : null;
    }
}

module.exports = Fridge;

