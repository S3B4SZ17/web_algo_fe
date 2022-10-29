import React from 'react';
import {
  MDBContainer,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">



      <Button href="http://localhost:8080/api/login-gl" rel="noreferrer" variant="contained" style={{margin: '2rem'}} startIcon={<GoogleIcon />}>
        LogIn with Google
      </Button>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or login with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn href="http://localhost:8080/api/login-gl" rel="noreferrer" tag='a' color='none' className='m-1' >
            <MDBIcon fab icon='google' size="sm" color="success"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
  );
}

export default Login;