const express = require("express");
const cors = require("cors");
const yahooFinance = require("yahoo-finance");

const app = express();
app.use(cors());
const port = 40000;

app.get("/stock", async (req, res, next) => {
  try {
    var symbol = req.query.symbol;
    yahooFinance
      .historical({ symbol: symbol, from: "2021-07-20", to: "2021-07-29" })
      .then((result) => {
        res.status(200).json(result);
      });
  } catch (error) {
    next(error);
    res.status(400).send(`error:${error}`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
