const express = require("express");

const app = express();

app.get("/data", (req, res) => {
  res.send("Alhamdulillah");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});