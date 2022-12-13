import React, { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useCookies } from 'react-cookie';
import toast, { Toaster } from "react-hot-toast";

export default function Reverse (){

  const [cookies] = useCookies(['token']);
  const [linkListarr, setLinkedListarr] = useState([1]);
  const [revlinkedList, setReverseList] = useState(1);
  const [email, setEmail] = useState(localStorage.getItem("user_email"));

  const handleChangeList = (event) => {

    const numsArr1 = Array.from(String(parseInt(event.target.value)), Number);
    setLinkedListarr(numsArr1)
    console.log(numsArr1)
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
      linkedList: linkListarr
    };
    console.log(data);
    instance
      .post("api/authorized/reverse_linkedList", data, {headers: {'Authorization': `Bearer ${cookies.token}`, 'user_email': `${email}`}})
      .then((res) => {
        setReverseList(res.data.linkedList);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

    return (
      <div>
        <Card style={{ width: '20rem', margin: '2rem'}}>
          <Card.Body>
          <Card.Title>Reverse Linked List</Card.Title>
          <Card.Text>
          You are given a single linked lists and you just need to reverse the order of the items
          </Card.Text>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>
                Numbers :
                <Form.Control type="number" name="linkelist" onChange={handleChangeList} required/>
              </Form.Label>

              <Button style={{ margin: '5px'}} type="submit" variant="primary">Reverse</Button>
              <Form.Label>
                Result:
                <Form.Label type="text" name="revList" style={{ padding: '15px'}}>[{revlinkedList}]</Form.Label>
                
              </Form.Label>
            </Form.Group>

          </Form>
        </Card.Body>
      
        </Card>
        
      </div>
    );
}


