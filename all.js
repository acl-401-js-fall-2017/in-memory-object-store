const uniqid = require('uniqid');
class Fridge {
    constructor() {
        this.shelf = [];
    }
    save(beer) {
        beer._id = uniqid();
        this.shelf.push(beer);
        return beer;
    }

    get(id) {
        const beerReturn = this.shelf.find(beer => beer._id === id);
        return beerReturn || null;
    }
}

module.exports = Fridge;