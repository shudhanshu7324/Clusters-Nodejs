const os = require("os");
const cluster = require("cluster");
const express = require("express");

const CPUslength = os.cpus().length;
const PORT = 9000;

// vertical scaling in nodejs
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < CPUslength; i++) {
    cluster.fork();
  }
} else {
  const app = express();

  app.get("/", (req, res) => {
    return res.json({ message: `Hello from express server ${process.pid}` });
  });

  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
}
