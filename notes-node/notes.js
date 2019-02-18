console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding note', title, body);
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

