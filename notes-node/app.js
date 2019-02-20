console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');



// var filteredArray = _.uniq(['Mike']);
// console.log(filteredArray);

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
// console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
    //console.log('Adding new note');
    notes.addNote(argv.title, argv.body);

} else if (command === 'list') {
    //console.log('Listing all notes');
    notes.getAll(); //return all notes regardless of title
// adding two more else/clauses on my own: read and remove

} else if (command === 'read') {
    //console.log('Reading note'); // showing one single note
    // will require title as it's showing a single note
    notes.getNote(argv.title);


} else if (command === 'remove') {
    //console.log('removing note');
    notes.removeNote(argv.title);

} else {
    console.log("Command not recognized");

}




//console.log(process.argv); // cli agruments array
