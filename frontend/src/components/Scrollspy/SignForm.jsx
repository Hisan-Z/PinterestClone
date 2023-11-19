import React, { useState } from "react";
import {
  Row,
  Col,
  Modal,
  Form,
  InputGroup,
  Container,
  Button,
} from "react-bootstrap";
import Register from "../Register/Register";
import Brand from "../Logo/Brand";
import Icon from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { ic_keyboard_arrow_up } from "react-icons-kit/md/ic_keyboard_arrow_up";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_USER_URL } from "../../constants/urls";
import "./Save.css";
const SignForm = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const [credentials, setCredentials] = useState({
    fname: undefined,
    email: undefined,
    password: undefined,
    dob: undefined,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${SERVER_USER_URL}/register`, credentials);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <a href="#home">
      <button
        style={{
          background: "red",
          borderRadius: "50%",
          padding: "0.6rem",
          border: 0,
          position:"fixed",
          left:"50%",
          marginTop:"20px"
        }}

      >
        <Icon icon={ic_keyboard_arrow_up} size={30}></Icon>
      </button>

    </a>
      <Row>
        <Col className="mt-5">
          <div className="right ">
            <div className="side-text">
              <div className="heading text-wrap text-left text-light w-50">
                Sign up to get your ideas
              </div>
            </div>
          </div>
        </Col>
        <Col className="mt-5">
          <div className="left">
            <div className="bs-component">
              <div className="modal">
                <Modal.Header className="border-0">
                  <Modal.Title className="mx-auto d-block">
                    <Brand className="mx-auto d-block" />
                  </Modal.Title>
                  <Modal.Title className="text-center">
                    Welcome to Pinterest
                  </Modal.Title>
                  <Modal.Title className="text-center h6 font-weight-normal">
                    Find new ideas to try
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className="">
                  <Container>
                    <Form className="mt-3 signup">
                      <Form.Group className="m-3 ">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Rachel Greene"
                          id="fname"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group className="m-3 ">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          id="email"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="m-3">
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type={type}
                            placeholder="Create Password"
                            id="password"
                            onChange={handleChange}
                          />
                          <InputGroup.Text className="bg-none">
                            <span onClick={handleToggle}>
                              <Icon
                                class="absolute m-10"
                                icon={icon}
                                size={15}
                              />
                            </span>
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>

                      <Form.Group className="m-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Create Password"
                          id="dob"
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group className="m-3">
                        <Button
                          className="btn btn-dark rounded-pill w-100"
                          onClick={handleClick}
                        >
                          Submit
                        </Button>
                      </Form.Group>
                    </Form>
                  </Container>
                </Modal.Body>
                <Modal.Footer className="border-0 mx-4 justify-content-center">
                  <div className="text ">
                    By continuing, you agree to Pinterest's{" "}
                    <a
                      className="text-decoration-none text-bold d-inline"
                      href="#"
                    >
                      Terms of Service;
                    </a>{" "}
                    and acknowledge you've read our{" "}
                    <a
                      href="#"
                      className="text-decoration-none fw-bold d-inline"
                    >
                      Privacy Policy
                    </a>{" "}
                    Notice at collection
                    <br />
                    <a href="login">Already a member? Log in</a>
                  </div>
                </Modal.Footer>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SignForm;
