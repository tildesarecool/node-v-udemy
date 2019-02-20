// var obj = {
//     name: 'Keith'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// //convert to string
// var personString = '{"name": "Keith", "age": 40}';
// // convert to object; opposite of stringify
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);


const fs = require('fs');

var originalNote = {
    title: 'This is a test note',
    body: 'with some test content'
};

var originalNoteString = JSON.stringify(originalNote);
//'{ "title": "This is a test note", "body": "with some test content" }';

fs.writeFileSync('notes.json', originalNoteString);

// read out/parse, print one of properties, title

var noteSring = fs.readFileSync('notes.json');
// exercise: convert back to object
var note = JSON.parse(noteSring);
// test to make sure
console.log(typeof note);
console.log(note.title);

// to print title, note.title
// make two things two work
