console.log("Starting app.js");

const fs = require('fs');
const os = require('os');

// lodash inserts a "nodemodules/lodash folder" that should really be exccluded from 
// a git repot destined for git hub or simply deleted
// since lodash is mentioned as a dependency in package.json running the command simply
// npm install
// in the app's (notes) folder should re-download/insert that folder structure
// it's good to let the 'npm install' re-generate the folder structure since it will vary
// depending on the node/lodash version
const _ = require('lodash');
const notes = require('./notes');


// utilizing is string utility in lodash
console.log(_.isString(true));
console.log(_.isString('Keith'));

var filteredArray = _.uniq(['Keith', 1, 'Keith', 1, 2, 3, 4]);
console.log(filteredArray);


// var res = notes.addNote();
// console.log(res);

// var sum = notes.notesAdd(10,3);

// console.log('Result: ', sum);

// var user = os.userInfo();

// this is used in modern versions of node instead of just 'appendFile'
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

// console.log(user);