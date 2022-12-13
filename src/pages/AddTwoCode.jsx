import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddEditor from "../components/MonacoEditor";
import AddTwo from "../components/AddTwo";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddTwoCode = () => {
  return (
    <div>
      <Navbar />
        <Container>
          <Row>
              <Col md={4}> 
                <AddTwo/> 
              </Col>
              <Col md={8}>
                <AddEditor name = "add_two.py" />
              </Col>
          </Row>
          
        </Container>
      
      <Footer />
    </div>
  );
};

export default AddTwoCode;