import React, { useEffect, useState, useRef } from "react";
/* import { useInput } from "./hooks/useInput";
import { useTabs } from "./hooks/useTabs";
import { useTitle } from "./hooks/useTitle";
import { useClick } from "./hooks/useClick";
import { arrayOfContent } from './constants/forUseTabs'; 
*/

const useConfirm = (message="", onConfirm: Function, onCancel: Function): Function => {

  function confirmAction() {
    if (window.confirm(message)) {
      onConfirm()
    } else {
      onCancel();
    }
  }
  return confirmAction
}

function App() {
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("Abort");
  const confirmDelete = useConfirm('Are you sure?', deleteWorld, abort)
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

export default App;
