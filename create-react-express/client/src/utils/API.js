import axios from "axios";


//we define our google books api key - I'm not sure we need this
const key = "AIzaSyBaMI8XrAsprOT6cf1JMKaFzq7O3imY3S4"
console.log(key)

export default {
  searchBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books/", bookData);
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  loadBooks: function() {
    return axios.get("/api/books")
  }
};
