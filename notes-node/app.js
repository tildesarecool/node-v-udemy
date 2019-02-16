console.log("Starting app.");

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

// this is used in modern versions of node instead of just 'appendFile'
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);

//console.log(user);