const shortid = require('shortid');
const bookArray = [];

class Store {
    constructor( book, _id) {
        this.book = book;
        this._id = _id;
    }


    save() {
        this.book._id = shortid.generate();
        bookArray.push(this.book);
        return this.book;
    }

    get() {
        const foundBook = bookArray.find(this.book._id);
        return foundBook;
    }

}


module.exports = Store;