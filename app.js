let express = require("./lib/express.js");
let router = require('./lib/router');

let app = express();
let port = process.env.PORT || 3000;
let host = "localhost";



// Use the router to register callbacks
// for paths and HTTP verbs
router.get('/', (req, res) => {
  res.end('Hello GET!');
});

router.post('/', (req, res) => {
  res.end('Hello POST!');
});

app.listen(port, host, () => {
  console.log(`server running at http://${host}:${port}/`);
});
