import React, {  ChangeEvent, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './App.css';
import EquipmentTable from './components/EquipmentTable'

function App() {
   const [type, setType] = useState("All");

   const handleEquipmentSelect = (event:ChangeEvent<any>) => setType(event.target.value)
  return (
    <Container className="App">
      <Row >
        <Col ><h1 >Bright Bridge Council Pollution level</h1></Col>
        <Col lg={{span: 3, offset: 2}}>
        <Form.Control as="select" onChange={handleEquipmentSelect}>
          <option>All</option>
          <option>Standard</option>
          <option>Enhanced</option>
        </Form.Control>
        </Col>
      </Row>
      <Row>
        <EquipmentTable type={type}/>
      </Row>
    </Container>
  );
}

export default App;
