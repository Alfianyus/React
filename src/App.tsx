import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

function App() {
 const [alertVisible,setAlertVisibility]=  useState(false)
  return (
    <div>
      {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={() => console.log(setAlertVisibility(true))}>My BUtton</Button>
    </div>
  );
}

export default App;
