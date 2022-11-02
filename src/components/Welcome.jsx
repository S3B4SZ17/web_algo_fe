import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import axios from "axios";
import { useCookies } from 'react-cookie';
import Alert from 'react-bootstrap/Alert';

export default function Welcome() {
  const [showA, setShowA] = useState(true);
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState('');

  const toggleShowA = () => setShowA(!showA);

  const [cookies] = useCookies(['token']);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect( () => {
    if (cookies.token === ''){
      setAuthenticated(false)
    }else{
      axios
      .get("http://localhost:8080/api/authorized/userinfo", {headers: {'Authorization': `Bearer ${cookies.token}`}})
      .then((res) => {
        localStorage.setItem("isAuthenticated", "true");
        setEmail(res.data.user.email)
        localStorage.setItem("user_email", email);
        setAuthenticated(true)
      })
      .catch((error) => {
        setAuthenticated(false)
        console.error(`Error: ${error}`)
      });
    }
    });

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col md={6} className="mb-2">
        {authenticated
            ? <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>Hurray! You're a genius.</Alert>

            : <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                You are not authenticated!
              </p>
              </Alert>
        }
      </Col>
    </Row>
  );
}