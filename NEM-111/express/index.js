const express = require("express");

const app = express();
app.use(express.json());
app.post("/addData", (req, res) => {
  console.log(req.body);
  res.end("data has been recorded");
});

app.listen(3400, () => {
  console.log("Running port 3400");
});
