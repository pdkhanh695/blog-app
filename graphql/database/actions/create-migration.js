const fs = require("fs");
const path = require("path");

let tableName;
try {
  //array contain all of argument that we pass in node
  tableName = process.argv
    .find((arg) => arg.includes("--tableName="))
    .split("=")[1];
} catch (err) {
  // we split the string that we return
  return console.error(
    "--tableName parameter not found. Please specify a table name."
  );
} // say that value

// retrun the current unix time
// by using that can help get data in order

const fileName = new Date().getTime() + `_${tableName}.sql`;

fs.writeFile(
  path.resolve(__dirname, `../migrations/${fileName}`),
  "",
  (err) => {
    if (err) throw new Error(err);
    console.log("Created new migration file in migrations folder.");
  }
);
