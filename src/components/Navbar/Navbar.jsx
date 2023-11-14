import { React, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import Brand from "../Logo/Brand";
import Menu from "./Menu";

const NavbarComponent = () => {
  
  return (
    <div>
        <Navbar variant="dark" className="justify-content-end">
          {/* <Container> */}
            <Navbar.Brand href="/" className="ms-5" style={{position:"absolute",left:0}}>
              <Brand name="Pinterest Clone" /> 
            </Navbar.Brand>
            <Menu />
        </Navbar>
    </div>
  );
};
export default NavbarComponent;
