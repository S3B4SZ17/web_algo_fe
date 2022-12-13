import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ReverseNum from "../components/MonacoEditor";
import Reverse from "../components/Reverse";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ReverseNumber = () => {
  return (
    <div>
      <Navbar />
        <Container>
          <Row>
              <Col md={4}> 
                <Reverse/> 
              </Col>
              <Col md={8}>
                <ReverseNum name = "reverse_number.py" />
              </Col>
          </Row>
          
        </Container>
      
      <Footer />
    </div>
  );
};

export default ReverseNumber;
