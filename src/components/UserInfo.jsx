import axios from "axios";
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useCookies } from 'react-cookie';


function UserInfo (){
    const [cookies] = useCookies(['gmail_token']);
    const [name, setName] = useState('');

    useEffect( () => {
  
      axios
        .get("https://www.googleapis.com/oauth2/v2/userinfo?access_token="+ cookies.gmail_token)
        .then((res) => {
          setName(res.data.email);
        })
        .catch((error) => console.error(`Error: ${error}`));
      }
    );

    return (
        <Card style={{ width: '20rem', margin: '2rem'}}>
          <Card.Body>
          <Card.Title>User Info</Card.Title>
          <Card.Subtitle>Will show the user's email</Card.Subtitle>
          <Card.Text>
            Information of the user email = {name}.
          </Card.Text>
        </Card.Body>
      
        </Card>
    );
}

export default UserInfo;
