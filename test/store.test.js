const assert = require('assert');
const store = require('../lib/store');

describe('store in memory', () => {
    beforeEach('creates toolStore', () =>{

    });

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

    it('returns an array of all tools', () => {
        store.save({
            name : 'pry bar',
            size : '36 inch'
        });
        store.save({
            name : 'wrench',
            size : '15mm'
        });
        let toolBox = store.getAll();
        assert.deepEqual(toolBox.length, 4);
    });

    it('removes the tool and returns changed object', () => {
        let driver =store.save({
            name : 'screwdriver',
            size : 'flat 4'
        });
        let sellTool = store.remove(driver._id);
        assert.deepEqual(sellTool, { removed:true });
    });

});