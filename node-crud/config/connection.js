let mongose = require("mongose");

mongose.connect("mongodb://localhost:27017/crud", { useMongoClient: true });

module.exports = mongose;
