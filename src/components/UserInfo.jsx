import axios from "axios";
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useCookies } from 'react-cookie';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


function UserInfo (){
    const [cookies] = useCookies(['token']);
    const [email, setEmail] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [show, setShow] = useState(true);

    useEffect( () => {
      if (cookies.token == ''){
        setAuthenticated(false)
      }else{
        axios
        .get("http://localhost:8080/api/authorized/userinfo", {headers: {'Authorization': `Bearer ${cookies.token}`}})
        .then((res) => {
          setEmail(res.data.user.email);
          localStorage.setItem("isAuthenticated", "true");
          setAuthenticated(true)
        })
        .catch((error) => console.error(`Error: ${error}`));
      }
      }
      
    );

    return (
      <div>
          {authenticated
            ? <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>Hurray! You're a genius.</Alert>

            : <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                You are not authenticated!
              </p>
              </Alert>
          }
          {/* {(true|false) ? si true hago esto : si false hago esto} */}
          
          <Card style={{ width: '20rem', margin: '2rem'}}>
          <Card.Body>
          <Card.Title>User Info</Card.Title>
          <Card.Subtitle>Will show the user's email</Card.Subtitle>
          <Card.Text>
            Information of the user email = {email}.
          </Card.Text>
        </Card.Body>
      
        </Card>
      </div>
        
    );
}

export default UserInfo;
