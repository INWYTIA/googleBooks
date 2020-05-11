import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyCW6kbIg6PrT_KBVenj7eZY8z2pWjU9KrU";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  load: function() {
    return axios.get("/api/books");
  },
  save: function(data) {
    return axios.post("/api/books", data);
  },
  delete: function(id) {
    return axios.delete(`/api/books/${id}`);
  }
};
