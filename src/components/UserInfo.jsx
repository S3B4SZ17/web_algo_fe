import axios from "axios";
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useCookies } from 'react-cookie';
import toast, { Toaster } from "react-hot-toast";


function UserInfo (){
    const [cookies] = useCookies(['token']);
    const [email, setEmail] = useState(localStorage.getItem("user_email"));
    const [authenticated, setAuthenticated] = useState(false);
    const [show, setShow] = useState(true);

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

    const authenticate = async () => {
      instance
        .get("api/authorized/userinfo", {headers: {'Authorization': `Bearer ${cookies.token}`, 'user_email': `${email}`}})
        .then((res) => {
          
          setAuthenticated(true)
        })
        .catch((error) => {
          setAuthenticated(false)
          console.error(`Error: ${error}`)
        });
    }

    useEffect( () => {
      toast.promise(authenticate(), {
        loading: "Processing ...",
        error: "Ocurrio un error con el servidor",
        success: "Estas autenticado!!!",
        icon: '👏',
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
      });
      }
      
    );

    return (
      <div>
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
