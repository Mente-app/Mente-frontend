const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require('cors');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());

const uri =
  "mongodb+srv://webapp:aEDrzra2vixATpc@clustermenteweb.i9ab5.mongodb.net/Mente?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/api", (req, res) => {
  client.connect((err) => {
    if (!err) {
      res.json({ message: "successful connection with the server" });
    } else {
      res.json({ message: "Error in the connectivity" });
    }
    client.close();
  });
});

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
