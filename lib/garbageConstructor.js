const shortid = require('shortid');

class GarbageCan {
    constructor() {
        this.list = [];
    }

    get(id) {
        const idIndex = this.list.findIndex(x => x._id === id);
        if ( idIndex > -1 ){
            const objectToReturn = this.list[idIndex];
            return objectToReturn;
        }
        return null;
    }

    getAll() {
        console.log(this.list.slice());
        return this.list.slice();
    }
    
    save(object) {
        const newId = shortid.generate();
        object._id = newId;
        this.list.push(object);
        return object;
    }
    
    remove(id) {
        const idIndex = this.list.findIndex(x => x._id === id);
        if (idIndex > -1 ){
            this.list.splice(idIndex,1);
            return { removed: true };
        }
        return { removed: false };
    }
}



module.exports = GarbageCan;