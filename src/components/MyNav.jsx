import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

class MyNav extends React.Component {
  render() {
    return (
      <Navbar
        className="Navbar-element"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Browse</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNav;
