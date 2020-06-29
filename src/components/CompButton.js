import React, { useState } from "react";
import Button from "react-bootstrap/Button";


export default function CompButton( { handleCompToggle } ) {
  

  return (
    <>
  
      <Button onClick={handleCompToggle}>Compare</Button>
    </>
  );
}
