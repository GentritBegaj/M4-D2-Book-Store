import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import history from "../data/history.json";
import horror from "../data/horror.json";
import fantasy from "../data/fantasy.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import "./LatestRelease.css";

class LatestRelease extends React.Component {
  state = {
    category: [...history],
  };

  render() {
    return (
      <Container className="content-div">
        <Row>
          <Col xs={6} sm={4} md={2} className="mb-3">
            <Button onClick={() => this.setState({ category: [...horror] })}>
              Horror
            </Button>
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-3">
            <Button onClick={() => this.setState({ category: [...history] })}>
              History
            </Button>
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-3">
            <Button onClick={() => this.setState({ category: [...scifi] })}>
              Scifi
            </Button>
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-3">
            <Button onClick={() => this.setState({ category: [...fantasy] })}>
              Fantasy
            </Button>
          </Col>
          <Col xs={6} sm={4} md={2} className="mb-3">
            <Button onClick={() => this.setState({ category: [...romance] })}>
              Romance
            </Button>
          </Col>
        </Row>
        <Row>
          {this.state.category.map((book) => (
            <Col xs={12} sm={6} md={4} lg={3} className="mt-5">
              <Card className="Card">
                <Card.Img variant="top" src={book.img} height="280px" />
                <Card.Body className="cardBody">
                  <Card.Title className="cardTitle">{book.title}</Card.Title>
                  <Card.Text>${book.price}</Card.Text>
                  <Button className="ml-auto" variant="success">
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
