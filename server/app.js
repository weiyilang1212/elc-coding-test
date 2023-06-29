/**
 * The Server Can be configured and created here...
 *
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

const express = require("express");
const data = require("./data");
const cors = require("cors");
const hostname = "localhost";
const port = 3035;

const app = express();
app.use(cors());

app.get("/search", (req, res) => {
  const searchStr = req.query.searchStr ?? "";
  const searchResult = [];
  data.forEach((a) => {
    console.log(a.name);
    if (a.name.toLowerCase().includes(searchStr.toLowerCase())) {
      searchResult.push(a);
    }
  });
  res.send(searchResult);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
