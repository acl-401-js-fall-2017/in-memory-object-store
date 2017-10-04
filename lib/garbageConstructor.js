const shortid = require('shortid');

class GarbageCan {
    constructor() {
        this.list = [];
    }

    // get(id) {

    // }

    // getAll() {
    //     console.log(this.list.slice());
    //     return this.list.slice();
    // }
    
    save(object) {
        let newId = shortid.generate();
        object._id = newId;
        this.list.push(object);
        return this.list;
    }
    
    // remove(id) {

    // }
}



module.exports = GarbageCan;