const fs = require("fs");

console.log("Init");
/*fs.readFile("data.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(`Error ${error}`);
  } else {
    console.log(data);
  }
});*/

let data = fs.readFileSync("data.txt", "utf-8");
console.log(data);
console.log("End");

fs.appendFile("data.txt", "\nThis is a data file", (error) => {
  if (error) console.log(`Error ${error}`);
});

fs.createReadStream("data.txt").pipe(fs.createWriteStream("data2.txt"));

fs.unlink("data.txt", (error) => {
  if (error) throw error;
  console.log("Deleted!");
});

fs.rename("data2.txt", "data1.txt", (error) => {
  if (error) throw error;
  console.log("Renamed!");
});
