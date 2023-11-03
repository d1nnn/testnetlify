const express = require('express');
const serverless = require('serverless-http');
const path = require('path');
const app = express();
const router = express.Router();
const anotherRouter = express.Router();

app.use(express.static(path.join(__dirname, "..", "build")));

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
})

anotherRouter.get("/", (req, res) => {
  res.json({ name: "Dat", age: 24 });
})

router.get("/test", (req, res) => {
  res.json({ message: "test route" });
})

app.use("/.netlify/functions/api", router);

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// })

module.exports = serverless(app);

