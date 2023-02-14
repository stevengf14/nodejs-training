let mongose = require("mongose");
let Schema = mongose.Schema;

let personSchema = new Schema(
  {
    id: { type: String },
    name: { type: String },
    lastName: { type: String },
    age: { type: Number, min: 0 },
  },
  { versionKey: false }
);

let Person = mongose.model("People", personSchema);

model.exports = Person;
