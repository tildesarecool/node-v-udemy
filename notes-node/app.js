console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

// var res = notes.addNote();
// console.log(res);

var sum = notes.notesAdd(10,3);

console.log('Result: ', sum);

// var user = os.userInfo();

// this is used in modern versions of node instead of just 'appendFile'
// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

// console.log(user);