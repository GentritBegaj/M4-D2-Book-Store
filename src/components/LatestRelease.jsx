import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import books from "../data/fantasy.json";
import "./LatestRelease.css";

class LatestRelease extends React.Component {
  render() {
    return (
      <Container className="content-div">
        <Row>
          {books.map((book) => (
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
