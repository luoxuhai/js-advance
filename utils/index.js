const _ = require("lodash");

exports.sampleArray = (size = 20) => {
  return _.sampleSize(
    Array.from({ length: 1000 }, (_, k) => k),
    size
  );
};
