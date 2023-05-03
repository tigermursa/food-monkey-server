const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const allData = require("./Public/data.json");

app.get("/data", (req, res) => {
  res.send(allData);
});

app.get("/data/:id", (req, res) => {
  const id = req.params.id;
  const usser = allData.find((us) => us.id.toString() === id);
  res.send(usser);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
