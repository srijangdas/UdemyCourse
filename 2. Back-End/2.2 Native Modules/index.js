const fs = require('fs');

fs.writeFile("message.txt", "Hello stuff", (err)=> {
    if(err) throw err;
    console.log("The file was saved.");
});