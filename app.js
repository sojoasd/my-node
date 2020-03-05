const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();

router.get("/test", function(req, res, next) {
  res.json({
    error: {
      message: error.message
    }
  });
});

app.use("/", router);

// console.log("__dirname: ", __dirname);
const port = 5001;
app.set("port", port);

app.listen(port, async () => {
  console.log(`Hello world app listening on port ${port}!`);
});
