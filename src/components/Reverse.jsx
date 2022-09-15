import React from "react";
import axios from "axios";

class Reverse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      reverse: 0,
    };
  }

  handleChange = (event) => {
    this.setState({ number: parseInt(event.target.value) });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      number: this.state.number,
    };
    axios
      .post("http://localhost:8081/reverse", data)
      .then((res) => {
        this.setState({ reverse: parseInt(res.data.reverse) });
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Number:
            <input type="number" name="number" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
        <label>
          Reverse:
          <output type="number" name="reverse">
            {this.state.reverse}
          </output>
        </label>
      </div>
    );
  }
}

export default Reverse;
