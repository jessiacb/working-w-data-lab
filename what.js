// let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// let rows = csv.split('\n');
// let data = rows.map(row => row.split(','));

// console.log(data);

// old cold from other lab

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26";
let rows = csv.split('\n');
let numberOfColumns = rows[0].split(',').length;  
let data = rows.map(row => row.split(','));

console.log(`Number of columns: ${numberOfColumns}`);
console.log(data);

// new code for number of columns, part 2

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26";
let rows = csv.split('\n');
let headers = rows[0].toLowerCase().split(',');

let objects = rows.slice(1).map(row => {
    let values = row.split(',');
    let obj = {};
    headers.forEach((header, index) => {
        obj[header] = values[index];
    });
    return obj;
});

console.log(objects);

// part 3

objects.pop();
objects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
objects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
let totalAge = objects.reduce((sum, obj) => sum + parseInt(obj.age), 0);
let averageAge = totalAge / objects.length;

console.log(`Average Age: ${averageAge}`);

// part 4^

let csvData = [headers.join(',')];

objects.forEach(obj => {
    let row = headers.map(header => obj[header]);
    csvData.push(row.join(','));
});

let newCsv = csvData.join('\n');
console.log(newCsv);

// part 5
// this is a lot and would have preferred to keep it all together instead