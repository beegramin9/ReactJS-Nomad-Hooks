import React, { useState, useEffect } from "react";
/* 
function App() {
  const changeTitleTo = useTitle('Loading...')
  setTimeout(()=> changeTitleTo('Home'),3000)
  return (
    <div className="App">
    </div>
  );
}
*/

export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle)
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title')
    htmlTitle.innerText = title
  }
  useEffect(updateTitle, [title])
  return setTitle
}