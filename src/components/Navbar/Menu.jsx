import React, { useState, useContext, useEffect } from "react";
import { Button, Nav, Navbar, Dropdown, NavDropdown } from "react-bootstrap";
import Searchbar from "./Searchbar";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Login from "../Login/LoginForm";
import Register from "../Register/Register";
import { AuthContext } from "../../context/AuthContext";
import "../../App.css"
import { SERVER_USER_URL } from "../../constants/urls";
import axios from "axios";

const Menu = (props) => {

  const { loading, error, dispatch } = useContext(AuthContext)
  const { user } = useContext(AuthContext);
  const navigate = useNavigate
  var currentUrl = window.location.pathname;

  // Find the corresponding link and add the "active" class
  useEffect(() => {

    document.querySelectorAll('.nav-link').forEach(function (link) {
      if (link.getAttribute('href') === currentUrl) {
        link.classList.add('active');
      }
    });

  }, []);


  const [modalShow, setModalShow] = useState(false);

  //  Use State to hide and the Login Modal
  const show = () => {
    setModalShow(true);
  };
  const hide = () => {
    setModalShow(false);
  };

  // Use state to hide and show the register modal
  const [rshow, setrModalShow] = useState(false);
  const sshow = () => {
    setrModalShow(true);
  };
  const rhide = () => {
    setrModalShow(false);
  };

  // Logout user
  const something = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/")
  }

  // Delete Account
  const handleDelete = async () => {
    if (!window.confirm("Are you sure?")) {
      return
    }
    else {
      const res = await axios.delete(`${SERVER_USER_URL}/${user.ID}`)
      alert("User account deleted")
      dispatch({ type: "LOGOUT" });
      window.location.reload()

    }
  }

  return (
    <div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link title="Home" href="/" >Home
          </Nav.Link>
          <Nav.Link title="Explore" href="/explore">Explore
          </Nav.Link>
          {user &&
            <Nav.Link title="Create" href="/pinCreation"> Create
            </Nav.Link>
          }
        </Nav>
        {user ?
          <Searchbar /> : <></>
        }
        {user == null ? <>
          <Button onClick={show} variant="secondary" className="rounded-pill mx-2 px-3">Login</Button>
          <Button onClick={sshow} variant="danger" className="rounded-pill mx-2 px-3">Sign Up</Button>
        </> :
          <>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={user.Name}
              menuVariant="dark"
            >
              <NavDropdown.Item href="/saved" >
                Saved Pins
              </NavDropdown.Item>
              <NavDropdown.Item href="/update">Update Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={handleDelete} >
                Delete Account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={something} >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </>

        }

        <Login show={modalShow} onHide={hide}></Login>
        <Register show={rshow} onHide={rhide}></Register>
      </Navbar.Collapse>

    </div>
  );
};

export default Menu;
