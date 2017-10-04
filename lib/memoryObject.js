const shortid = require('shortid');
const garage = [];

class Store {
    constructor(car) {
        this.car = car;
    }

    save() {
        this.car._id = shortid.generate();
        garage.push(this.car);
        return this.car;
    }

}

module.exports = Store;