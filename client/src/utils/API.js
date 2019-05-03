import axios from "axios";


export default {
  searchBooks: function(query) {
    let newQuery = query.trim().replace(/ /g, '+');
    console.log(newQuery)
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + newQuery);
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
