import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ReverseEditor from "../components/MonacoEditor";
import ReverseLinkedList from "../components/ReverseLinkedList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ReverseList = () => {
  return (
    <div>
      <Navbar />
        <Container>
          <Row>
              <Col md={4}> 
                <ReverseLinkedList/> 
              </Col>
              <Col md={8}>
                <ReverseEditor name = "reverse_linkedlist.py" />
              </Col>
          </Row>
          
        </Container>
      
      <Footer />
    </div>
  );
};

export default ReverseList;