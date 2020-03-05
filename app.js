const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res) => res.send({ status: "kerker" }));

// console.log("__dirname: ", __dirname);
const port = 5001;
app.set("port", port);

app.listen(port, async () => {
  console.log(`Hello world app listening on port ${port}!`);
});
