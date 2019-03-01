const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
}) // Async

const file = fs.readFileSync('./hello.txt');
console.log(file.toString());

// Append 
// fs.appendFile('./hello.txt', 'add someting', err => {
//     if (err) {
//         console.log(err);
//     } 
// })

// Write
// fs.writeFile('./a.txt', 'someting', err => {
//     if (err) {
//         console.log(err);
//     } 
// })

// Delete
fs.unlink('./a.txt', err => {
    if (err) {
        console.log(err);
    } 
})