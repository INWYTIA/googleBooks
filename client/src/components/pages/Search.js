import React, { Component } from "react";
import Container from "../Container";
import Result from "../Result";
import SearchBar from "../SearchBar";
import API from "../../util/API";

class Search extends Component {
  state = {
    result: [],
    search: ""
  };

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  handleSave = event => {
    const book = {
      title: event.target.title,
      authors: event.target.authors,
      description: event.target.description,
      image: event.target.image,
      link: event.target.link
    }
    API.save(book)
      .then()
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <SearchBar handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit}/>
        <Container items={this.state.result} text="Search Results">
          {/* {this.state.result.map(item => (
            <Result item={item} />
          ))} */}
        </Container>
      </div>
    );
  }
}


export default Search;
