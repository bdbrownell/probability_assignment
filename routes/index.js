const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const { calculateProbabilities } = require("../helper");
  const k = +req.header("k");
  const probabilities = calculateProbabilities();
  let returnBody = probabilities;

  if (req.body && req.body.length > 0) {
    res.status(400).send("Request cannot contain body");
    next();
  }

  //if k was provided, validate the value first
  //isNaN is used because of the conversion to number => +undefined = NaN
  
  if (isNaN(k) === false){
    //console.log(k)
    if (Number.isFinite(k) === false) {
      res.status(400).send("k must be a number");
      next();
    }
    if (k < 6 && k > 99) {
      res.status(400).send("k must be between 6 and 99");
      next();
    }
    //need to adjust index to match probability - array starts at 0 but k starts at 6.
    returnBody = probabilities[k - 6];
  }

  res.status(200).send(returnBody);

  next();
});

module.exports = router;
