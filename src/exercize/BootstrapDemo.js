import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Block from "./Block";
class BootstrapDemo extends React.Component {
  render() {
    const Blocks = [];
    for (let i = 1; i <= 15; i++) {
      Blocks.push(
        <Col key={i} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Block number={i} />
        </Col>
      );
    }
    return (
      <div>
        <Button variant="primary">button</Button>
        <Container>
          <Row>{Blocks}</Row>
        </Container>
      </div>
    );
  }
}
export default BootstrapDemo;
