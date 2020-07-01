import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

export default function CompAlert() {
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>Compare?</Alert.Heading>
        <div className="d-flex justify-content-end">
        <Link to='./CompPage'><Button>Go!</Button></Link>
        </div>
      </Alert>
    </div>
  );
}
