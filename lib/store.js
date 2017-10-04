// Don't put instance state here!
// It would be shared be all stores!
// const list = [];

// revealing module pattern:

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
    }

};

module.exports = store;

// class Store{
//     constructor(){
//         this.name = 'name',
//         this.size = 'size',
//         _id: shortid.generate(),
//     }
//     save(object) {
//     }
// }

// module.exports = function createStore() {
//     const list = [];
//     const dictionary = {};

//     const store = {
//         get(id) { },
//         getAll() { },
//         save(object) { },
//         remove(id) { }
//     };

//     return store;
// };