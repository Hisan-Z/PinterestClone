import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Check = (props) => {
  return (
    <Form.Check
      inline
      name={props.name}
      label={props.label}
      type="radio"
      value={props.label}
      id={props.id}
    />
  );
};

export default Check;