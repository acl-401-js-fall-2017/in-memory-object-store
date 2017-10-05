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

    remove(id) {
        const index = this.shelf.findIndex(beer => beer._id === id);
        if(index === -1) return { removed: false };
        this.shelf.splice(index, 1);
        return { removed: true };
    }
}

module.exports = Fridge;