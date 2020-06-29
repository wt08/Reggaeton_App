import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function CompAlert() {
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button>Compare?</Button>
        </div>
      </Alert>
    </div>
  );
}
