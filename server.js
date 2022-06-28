const fs=require('fs');

fs.writeFileSync('Data.txt', "Hey I am Shubham");
const data = fs.readFileSync('data.txt','utf8');
console.log(data);

//Update
fs.appendFileSync('data.txt', "IIT Khagurpur");
console.log(data);

// Delete
fs.unlinkSync('data.txt');