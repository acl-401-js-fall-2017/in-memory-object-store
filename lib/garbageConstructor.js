const shortid = require('shortid');

class GarbageCan {
    constructor() {
        this.list = [];
    }

    get(id) {
        console.log('in get');
        console.log('this.list is', this.list);
        console.log('this.list[0].name', this.list[0].name);
        console.log('this.list[0]._id', this.list[0]._id);
        console.log('this.list.findIndex', this.list.findIndex(x => x.name === 'mold'));
        if ( this.list.findIndex(x => x._id === id) > -1 ){
            const objectToReturn = this.list.filter(a => a._id === id)[0];
            console.log('object to return is', objectToReturn);
            return objectToReturn;
        }
        console.log('returning null');
        return null;
    }

    // getAll() {
    //     console.log(this.list.slice());
    //     return this.list.slice();
    // }
    
    save(object) {
        let newId = shortid.generate();
        object._id = newId;
        this.list.push(object);
        console.log(this.list);
        return object;
    }
    
    // remove(id) {

    // }
}



module.exports = GarbageCan;