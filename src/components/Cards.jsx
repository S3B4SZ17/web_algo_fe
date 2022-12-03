import React from 'react';
import img1 from '../img/12345.png';
import img2 from '../img/AddTwo.png';
import img3 from '../img/ReverseList.png';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    
    <div className="container">   

        <div className="row" >  
        <div  className="col-md-3" style={{width: '30%', height: '10em'}} >   
            <MDBCard>
            <MDBCardImage src={img1} position='top' alt='...' />
            <MDBCardBody>
            <MDBCardTitle>How to Reverse Number</MDBCardTitle>
            <MDBCardText>
            Get the last digit of the given number by performing the modulo division 
            (%) and store the value in last_digit variable, likey last_digit= number % 10. 

            <div  style={{height: '3.5em'}}>   

            </div>

            </MDBCardText>
            <MDBBtn href='#'>Learn More</MDBBtn>
            </MDBCardBody>
            </MDBCard>
        </div> 

        <div className="col-md-3" style={{width: '30%', height: '20%'}}>
            <MDBCard>
            <MDBCardImage src={img2} position='top' alt='...' />
            <MDBCardBody>
            <MDBCardTitle>Add Two Numbers</MDBCardTitle>
            <MDBCardText>
            You are given two non-empty linked lists representing two non-negative integers.
            The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. 
            </MDBCardText>
            <div  style={{height: '1.5em'}}>   

            </div>
            <MDBBtn href='#'>Learn More</MDBBtn>
            </MDBCardBody>
            </MDBCard> 
        </div>   

        <div className="col-md-3" style={{width: '30%', height: '20%'}}>
            <MDBCard>
            <MDBCardImage src={img3} position='top' alt='...' />
            <MDBCardBody>
            <MDBCardTitle>Reverse Linked List</MDBCardTitle>
            <MDBCardText>
            The recursive approach to reverse a linked list is simple, just we have to divide the linked lists in two parts and i.e first node and the rest of the linked list, 
            and then call the recursion for the other part by maintaining the connectionthe order of the items
            </MDBCardText>
            <MDBBtn href='#'>Learn More</MDBBtn>
            </MDBCardBody>
            </MDBCard> 
        </div>   
    </div>
    
        
    </div>
    
  );
}