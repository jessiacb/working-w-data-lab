const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
const rows = csvData.split('\n'); // Split the data into rows
const headers = rows[0].split(','); // Get the first row (headers)
const numberOfColumns = headers.length; // Dynamically calculate the number of columns
