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
    // get(id) {
    //     let beerId = this.shelf.find(id);
    //     beerId ? id : null;
    // }

    // getAll() {
    //     this.shelf.length ? this.shelf : [];
    // }
    // remove() {

    // }
}

module.exports = Fridge;