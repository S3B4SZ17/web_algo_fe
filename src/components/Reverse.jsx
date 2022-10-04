import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

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
        <Card style={{ width: '20rem', margin: '2rem'}}>
          <Card.Body>
          <Card.Title>Reverse Number</Card.Title>
          <Card.Text>
            Enter a number and it will return the reverse of it.
          </Card.Text>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Number:
                <Form.Control type="number" name="number" onChange={this.handleChange} />
              </Form.Label>
              <Button style={{ margin: '5px'}} type="submit" variant="primary">Add</Button>
              <Form.Label>
                Reverse:
                <Form.Label type="number" name="reverse" style={{ margin: '15px'}}>{this.state.reverse}</Form.Label>
              </Form.Label>
            </Form.Group>

          </Form>
        </Card.Body>
      
        </Card>
        
      </div>
    );
  }
}

export default Reverse;
