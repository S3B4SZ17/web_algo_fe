import axios from "axios";
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useCookies } from 'react-cookie';
import Alert from 'react-bootstrap/Alert';


function UserInfo (){
    const [cookies] = useCookies(['gmail_token']);
    const [email, setEmail] = useState('');
    const [authenticated, setAuthenticated] = useState(false);


    useEffect( () => {
      if (cookies.gmail_token == ''){
        setAuthenticated(false)
      }else{
        axios
        .get("http://localhost:9090/api/authorized/userinfo", {headers: {'Authorization': `Bearer ${cookies.gmail_token}`}})
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
            ? <Alert variant="success">Hurray! You're a genius.</Alert>

            : <Alert variant="danger" onClose={() => setAuthenticated(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                You are not authenticated!
              </p>
              </Alert>
          }
          
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
