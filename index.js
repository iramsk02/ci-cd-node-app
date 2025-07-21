const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from CI/CD Node App running on EC2 with Docker! made some changes ");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
