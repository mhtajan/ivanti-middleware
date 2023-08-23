const fs = require('fs');
const path = require('path');

function checkStringAgainstFileNames(directory, inputString) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile() && path.extname(file) === '.js') {
      const fileName = path.parse(file).name; // Get the file name without extension
      if (fileName === inputString) {
        console.log('st')
        return true; // Match found
      }
    } else if (stats.isDirectory()) {
      if (checkStringAgainstFileNames(filePath, inputString)) {
        return true; // Match found in subdirectory
      }
    }
  }

  return false; // No match found
}

// Specify the directory to check file names against
const scriptsDirectory = path.join(__dirname, '..', 'posts');
const inputString = 'request_invoice'; // Replace with the string you want to check

const isMatching = checkStringAgainstFileNames(scriptsDirectory, inputString);
if (isMatching) {
  console.log(`The input string "${inputString}" matches a file name.`);
} else {
  console.log(`The input string "${inputString}" does not match any file name.`);
}
