'use strict';

const Store = require('class');
const store = new Store ();

const goalie = { name: 'howard', height: '75in'};
const fullback = { name: 'brooks', height: '76in'};
const midfielder = { name: 'iniesta', height: '67in'};
const forward = { name: 'wood', height: '70in'};

store.save(goalie);
store.save(fullback);
store.save(midfielder);
store.save(forward);

const players = store.getAll();

// module.exports = 