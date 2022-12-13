import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import { useCookies } from 'react-cookie';
import toast, {Toaster} from "react-hot-toast";
import Image from 'react-bootstrap/Image';

export default function Welcome() {
  const [showA, setShowA] = useState(true);
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const toggleShowA = () => setShowA(!showA);

  const [cookies] = useCookies(['token']);
  const [authenticated, setAuthenticated] = useState(false);

  const instance = axios.create({
    baseURL: "http://localhost:8080",
  });
  /**
  * Catch the AunAuthorized Request
  */
  instance.interceptors.response.use((response) => response, async (error) => {
      if (error.response.status === 401) {
        toast.error("Token invalid, please login again")
        localStorage.clear();
        window.location = '/login';
      }
    });

  useEffect( () => {
    if (cookies.token === ''){
      setAuthenticated(false)
    }else{
      axios
      .get("http://localhost:8080/api/authorized/userinfo", {headers: {'Authorization': `Bearer ${cookies.token}`}})
      .then((res) => {
        setEmail(res.data.user.email)
        setProfilePicture(res.data.user.picture)
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("profile_pic",profilePicture);
        localStorage.setItem("user_email", email);
        setAuthenticated(true);
        toast.success('Successfully authenticated!!');
      })
      .catch((error) => {
        setAuthenticated(false);
        console.error(`Error: ${error}`);
        toast.error("You are not authenticated");
      });
    }
    });



  return (
    <Row>
      <Col md={6} className="mb-2">
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        
      </Col>
      <Col md={6} className="mb-2">
        <h3>Welcome back!</h3>
        <Image src="https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif"/>
        
      </Col>
    </Row>
  );
}
