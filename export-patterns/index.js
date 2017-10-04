const GarbageCan = require('../lib/garbageConstructor');

const garbageCan = new GarbageCan();

const mold = { name: 'mold' };
const filth = { name: 'filth' };
const dirt = { name: 'dirt' };

garbageCan.save(mold);
garbageCan.save(filth);
garbageCan.save(dirt);

const allGarbage = garbageCan.getAll();

console.log(allGarbage);

// [ 
//     { _id: '1dd23', type: 'cat', name: 'felix' },
//     { _id: '45fd5', type: 'dog', name: 'fido' }
//     { _id: 'e3ec3', type: 'dog', name: 'scruffy' }
// ]

console.log(garbageCan.get('e3ec3'));

// { _id: 'e3ec3', type: 'dog', name: 'scruffy' }

garbageCan.remove('e3ec3');

console.log(allGarbage);

// [ 
//     { _id: '1dd23', type: 'cat', name: 'felix' },
//     { _id: '45fd5', type: 'dog', name: 'fido' }
// ]

// DON'T ACCESS THE INTERNAL STATE!!!
// store.list