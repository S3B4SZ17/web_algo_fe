import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';
import axios from "axios";
import Image from 'react-bootstrap/Image'
import { useCookies } from 'react-cookie';

export default function Navbar() {
  const [cookies] = useCookies(['token']);
  const [showNavText, setShowNavText] = useState(false);
  const [isAuthenticated] = useState(localStorage.getItem("isAuthenticated"));
  const [email, setEmail] = useState(localStorage.getItem("user_email"));
  const [profilePicture, setProfilePicture] = useState(localStorage.getItem("profile_pic"));

  const instance = axios.create({
    baseURL: "http://localhost:8080",
  });
  /**
  * Catch the AunAuthorized Request
  */
  // instance.interceptors.response.use((response) => response, (error) => {
  //     if (error.response.status === 401) {
  //       localStorage.clear();
  //       window.location = '/login';
  //     }
  //   });

  const handleLogout = () => {
    console.log(email + cookies.token);
    instance
      .get("api/authorized/end_session", {headers: {'Authorization': `Bearer ${cookies.token}`, 'user_email': `${email}`}})
      .then((res) => {
        localStorage.clear();
        cookies.token = null;
        window.location.pathname = "/login";
      })
      .catch((error) => {
        console.error(`Error: ${error}`)
      });
  }

  return (
    <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Web Algo</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavText(!showNavText)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavText}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='/'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/authorized/code_editor'>Code Editor</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/authorized/user'>User Info</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <MDBNavbarNav className='d-flex w-auto mb-3'>
           { isAuthenticated ?
           <>
            <MDBNavbarLink onClick={handleLogout}>Logout</MDBNavbarLink>
            <Image width={86} height={86} roundedCircle="true" src={profilePicture} referrerPolicy="no-referrer"></Image>
           </>
            
            : 
            <>
            <MDBNavbarLink href='/login'>Login</MDBNavbarLink>
            </>
            }
          </MDBNavbarNav>
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
