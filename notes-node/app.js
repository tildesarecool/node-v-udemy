console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');



// var filteredArray = _.uniq(['Mike']);
// console.log(filteredArray);

var command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
// adding two more else/clauses on my own: read and remove
} else if (command === 'read') {
    console.log('Reading note'); // showing one single note
} else if (command === 'remove') {
    console.log('removing note');
} else {
    console.log("Command not recognized");
}



//console.log(process.argv); // cli agruments array
