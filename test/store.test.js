const assert = require('assert');
const store = require('../lib/store');

describe('store in memory', () => {

    it('creates a new tool and id', () => {
        let newTool = store.save({
            name: 'socket',
            size: '13mm'
        });
        assert.ok(newTool._id);
    });

});