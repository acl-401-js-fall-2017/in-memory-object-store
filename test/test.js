const assert = require('assert');
const Store = require('../lib/store');

describe('whole store maybe?', () => {
    const book = { name: 'Harry Potter'};
    let bookStore = null;
    beforeEach(() => {
        bookStore = new Store(book);
        
    });

    describe('saves object w/id', () => {
        it('saves something', () => {
            bookStore.save(); //sim user imput
            assert.ok(bookStore.book._id);
        });

    });

    describe('gets object by id', () => {
        it.only('finds something by id', () => {
            const savedBook = bookStore.save(); 
            const gotBook = bookStore.get(savedBook); //actual-results- what meth returned
            assert.deepEqual(gotBook, savedBook._id); //actual and expected
        });
    });
    
});