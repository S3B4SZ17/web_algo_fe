import React, { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useCookies } from 'react-cookie';
import toast, { Toaster } from "react-hot-toast";

export default function Reverse (){

  const [cookies] = useCookies(['token']);
  const [number1, setNumber1] = useState(1);
  const [number1arr, setNumber1arr] = useState([1]);
  const [number2, setNumber2] = useState(1);
  const [number2arr, setNumber2arr] = useState([1]);
  const [sum_res, setSum] = useState('');
  const [email, setEmail] = useState(localStorage.getItem("user_email"));

  const handleChangeNum1 = (event) => {
    setNumber1(parseInt(event.target.value));
    
    const numsArr1 = Array.from(String(number1), Number);
    setNumber1arr(numsArr1)
    console.log(numsArr1)
  };

  const handleChangeNum2 = (event) => {
    setNumber2(parseInt(event.target.value));
    const numsArr2 = Array.from(String(number2), Number);
    setNumber2arr(numsArr2)
    console.log(numsArr2)
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

    const data = {
      listVal1: number1arr,
      listVal2: number2arr
    };
    console.log(data);
    instance
      .post("api/authorized/two_sums", data, {headers: {'Authorization': `Bearer ${cookies.token}`, 'user_email': `${email}`}})
      .then((res) => {
        console.log(res.data.sum);
        setSum(res.data.sum);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

    return (
      <div>
        <Card style={{ width: '20rem', margin: '2rem'}}>
          <Card.Body>
          <Card.Title>Add Two Numbers</Card.Title>
          <Card.Text>
          You are given two non-empty linked lists representing two non-negative integers.
            The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
          </Card.Text>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>
                Number 1:
                <Form.Control type="number" name="number1" onChange={handleChangeNum1} required/>
                Number 2:
                <Form.Control type="number" name="number2" onChange={handleChangeNum2} required/>
              </Form.Label>

              <Button style={{ margin: '5px'}} type="submit" variant="primary">Add</Button>
              <Form.Label>
                Result:
                <Form.Label type="text" name="sum_res" style={{ padding: '15px'}}>[{sum_res}]</Form.Label>
                
              </Form.Label>
            </Form.Group>

          </Form>
        </Card.Body>
      
        </Card>
        
      </div>
    );
}


