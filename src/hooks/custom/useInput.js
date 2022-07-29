import React, { useState } from "react";
/* 
  const maxLength = 10;
  function isInputLengthSmallerThanMaxLength(value) {
    return value.length <= maxLength
  }
  const name = useInput('Mr.', doesIncludeBannedChar)
  
  const bannedChar = "@";
  function doesIncludeBannedChar(value) {
    return !value.includes(bannedChar)
  }

  funtion App() {
    return (
      <div className="App">
        <input placeholder="Name" {...name}>
      </div>
    )
  }
*/
export const useInput = (initialValue, isValidated) => {
  const [value, setValue] = useState(initialValue);
  
  function onChange(e) {
    const { target : {value} } = e
    if (isValidated(value)) {
        setValue(value)
    }
  }
  return {value, onChange}
}