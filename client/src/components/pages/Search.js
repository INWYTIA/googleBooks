import React from "react";
import Container from "../Container";
import Result from "../Result";
import SearchBar from "../SearchBar";
import API from "../../util/API";

class Search extends Component {
  state = {
    result: {},
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

  render() {
    return (
      <div>
        <SearchBar />
        <Container>
          {props.map(item => (
            <Result item={item} />
          ))}
        </Container>
      </div>
    );
  }
}


export default Search;
