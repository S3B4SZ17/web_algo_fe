import React, { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useCookies } from 'react-cookie';
import toast, { Toaster } from "react-hot-toast";

export default function Reverse (){
  const [cookies] = useCookies(['token']);
  const [number, setNumber] = useState(1);
  const [reverse, setReverse] = useState(1);
  const [email, setEmail] = useState(localStorage.getItem("user_email"));

  const handleChange = (event) => {
    setNumber(parseInt(event.target.value));
  };


  const instance = axios.create({
    baseURL: "http://localhost:8080",
    });
  /**
  * Catch the AunAuthorized Request
  */
  instance.interceptors.response.use((response) => response, async (error) => {
      if (error.response.status === 401) {
        toast.error("Token invalid, please login again");
        localStorage.clear();
        window.location = '/login';
      }
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    setNumber()
    const data = {
      number: number,
    };
    console.log(data);
    instance
      .post("api/authorized/reverse", data, {headers: {'Authorization': `Bearer ${cookies.token}`, 'user_email': `${email}`}})
      .then((res) => {
        setReverse(parseInt(res.data.reverse));
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

    return (
      <div>
        <Card style={{ width: '20rem', margin: '2rem'}}>
          <Card.Body>
          <Card.Title>Reverse Number</Card.Title>
          <Card.Text>
            Enter a number and it will return the reverse of it.
          </Card.Text>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Number:
                <Form.Control type="number" name="number" onChange={handleChange} required/>
              </Form.Label>
              <Button style={{ margin: '5px'}} type="submit" variant="primary">Reverse</Button>
              <Form.Label>
                Reverse:
                <Form.Label type="number" name="reverse" style={{ padding: '15px'}}>{reverse}</Form.Label>
              </Form.Label>
            </Form.Group>

          </Form>
        </Card.Body>
      
        </Card>
        
      </div>
    );
}
