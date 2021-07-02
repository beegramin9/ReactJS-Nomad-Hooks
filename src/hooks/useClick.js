import React, { useState, useEffect, useRef } from "react";

/* 
function App() {
    const h1Title = useRef();
    useClick(h1Title, ()=> {console.log("say hello")});
    return (
    <div className="App">
        <h1 ref={h1Title}>Hello, world!</h1>
    </div>
);
} 
*/
export const useClick = (element, handleClickOnElement: Function ) => {
  
    useEffect( () => {
      if (element.current) {
        element.current.addEventListener("click", handleClickOnElement);
      }
      return () => {
        if (element.current) {
          element.current.removeEventListener('click',handleClickOnElement)
        }
      }
    }, [])
    return element;
  }