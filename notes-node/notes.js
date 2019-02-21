console.log('Starting notes.js');

const fs = require('fs');


var addNote = (title, body) => {
   // console.log('Adding note', title, body);
   var notes = [];
   var note = {
       title, // es6 style
       body
   };

   try {
    var notesString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(notesString);
   } catch(e) {

   }
   // check for duplicate notes
   var duplicateNotes = notes.filter((note) => note.title === title);

   if (duplicateNotes.length === 0 ) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
   }


};

var getAll = () => {
    console.log("Getting all notes");
};

var getNote = (title) => {
    console.log('Getting note', title);
}

var removeNote = (title) => {
    console.log('Removing note', title);
}

module.exports = {
    addNote, //: addNote // same as addnNote: addNote. by itself is an ES6 thing
    getAll,
    getNote,
    removeNote
};

//getnote function
//removnote passing in note want to remove 



// module.exports.addNote =  () => {
//     console.log('addNote');
//     return'New Note';
// };

