import Model from "../components/Model";
import Button from "../components/Button";
import { useState } from "react";

function ModelPage(){
  const [showModel, setShowModel] = useState(false);

  const handleClick = () => {
    setShowModel(true);
  };

  const handleClose = () => {
    setShowModel(false);
  };

  const actionBar = <div>
    <Button onClick = {handleClose} primary>Accept</Button>
  </div> 

  const model = <Model onClose = {handleClose} actionBar = {actionBar}>
    <p>Here is some text.</p>
  </Model>
  
  return (
    <div className="relative">
      <Button primary onClick={handleClick}>Open Model</Button>{showModel && model}
    </div>
  )
}

export default ModelPage;