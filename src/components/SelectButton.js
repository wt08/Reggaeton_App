import React, { useState } from "react";
import Button from "react-bootstrap/Button";


export default function SelectButton( { handleCompToggle } ) {
  
  const [select, setSelect] = useState(true)



  const combineOnClick = () => {
    handleCompToggle()
    setSelect(!select)
  }

  return (
    <>
      {/* <Button variant="warning" onClick={combineOnClick}>{select ? 'Select' : 'Unselect'}</Button> */}
    </>
  );
}
