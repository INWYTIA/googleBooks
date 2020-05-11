import React, { Component } from "react";
import Container from "../Container";
import Result from "../Result";
import API from "../../util/API";

class Saved extends Component {
  state = {
    result: {}
  };

  componentDidMount() {
    this.searchSaved();
  }

  searchSaved = query => {
    API.load(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleDelete = id => {
    API.delete(id)
      .then(res => this.searchSaved())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        {this.state.result.map(item => (
          <Result item={item} />
        ))}
      </Container>
    );
  }
}

export default Saved;
