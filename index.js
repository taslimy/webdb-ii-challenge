const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here
server.use("/api/zoos", require("./zoos/zoos-router"));
server.use("/api/bears", require("./zoos/bears-router"));

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
