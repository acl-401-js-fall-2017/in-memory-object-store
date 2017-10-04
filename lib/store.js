const shortid = require('shortid');

const dictionary = {};

const store = {
    save(tool) {
        const newTool ={
            name : tool.name,
            size : tool.size,
            _id: shortid.generate(),
        };
        dictionary[newTool._id] = newTool;
        return newTool;
    },

    get(id){
        const foundTool = dictionary[id];
        return foundTool;
    },

    getAll(){
        return Object.values(dictionary);
    },

    remove(id){
        if (this.get(id)) {
            return { removed : delete dictionary[id] };
        } else {
            return { removed : false };
        }
    }
};

module.exports = store;