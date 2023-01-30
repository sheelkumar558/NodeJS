// const os = require("os");
// console.log(os.freemem());

//const fs = require("fs");
// fs.readFile("./lec.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log("file can not exits");
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// console.log("hello after");

// const data = fs.readFileSync("./lec.txt", { encoding: "utf-8" });
// console.log(data);
// console.log("hello after");

const fs = require("fs");
fs.writeFile(
  "./loge.txt",
  "\nThis is me third time wrinting in the file\n",
  (err) => {
    if (err) {
      console.log("Cannot be write");
      console.log(err);
    } else {
      console.log("Data has been write in the file");
    }
  }
);
// fs.appendFile(
//   "./log.txt",
//   "\nThis is me third time wrinting in the file\n",
//   (err) => {
//     if (err) {
//       console.log("Cannot be appended");
//       console.log(err);
//     } else {
//       console.log("Data has been appended in the file");
//     }
//   }
// );
