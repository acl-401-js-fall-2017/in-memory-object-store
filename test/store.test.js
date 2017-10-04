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

    it('finds a tool by id and returns tool object', () => {
        let impact = store.save({
            name : 'air impact',
            size : '1/2 inch'
        });
        let foundTool = store.get(impact._id);
        assert.deepEqual(foundTool, impact);
    });

});