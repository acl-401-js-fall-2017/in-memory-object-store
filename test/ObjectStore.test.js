const assert = require('assert');
// eslint-disable-next-line
const shortid = require('shortid');
// eslint-disable-next-line
const Store = require('../lib/store');


// const fullback = { name: 'brooks', height: '76in'};
// const midfielder = { name: 'iniesta', height: '67in'};
// const forward = { name: 'wood', height: '70in'};


describe('memory store', function(){
    // eslint-disable-next-line
    let store = null;
    beforeEach(() => {
        store = new Store ();
    });

    describe('saving with an id', () => {
        it('generates an id', () => {
            let goalie = store.save({ name: 'howard', height: '75in'});
            // eslint-disable-next-line
            assert.ok(goalie._id);
        });

    });
});