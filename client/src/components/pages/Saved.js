import React from "react";
import Container from "../Container";
import Result from "../Result";

class Saved extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchSaved();
  }

  searchSaved = query => {
    API.load(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        {props.map(item => (
          <Result item={item} />
        ))}
      </Container>
    );
  }
}

export default Saved;
