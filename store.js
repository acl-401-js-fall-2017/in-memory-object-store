const shortid = require('shortid');
const storesList= [];

function save(object) {
    object._id = shortid.generate();
    storesList.push(object);
    return object;
}

module.exports = {
    storesList,  
    save
};