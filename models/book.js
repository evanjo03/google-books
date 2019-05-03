const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true},
  authors: { type: String, required: true, default: "No author found" },
  description: { type: String, default: "No description found" },
  image: { type:String, required: true, default: "No image found" },
  link: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
