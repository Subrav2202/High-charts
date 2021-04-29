import React from "react";
import { Row, Container } from "react-bootstrap";
import Cards from "./Cards";

function Dashboard() {
  return (
    <Container fluid>
      <Row>
        <Cards val="area"/>
        <Cards val="spline"/>
        <Cards val="bar"/>
        <Cards val="pie"/>
        <Cards val="scatter"/>
        <Cards val="line"/>
      </Row>
    </Container>
  );
}

export default Dashboard;
