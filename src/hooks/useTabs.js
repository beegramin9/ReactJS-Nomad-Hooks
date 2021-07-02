import React, { useState } from "react";
/* 
function App() {
  const {currentContent, setCurrentIndex} = useTabs(0, arrayOfContent)
  return (
    <div className="App">
      {arrayOfContent.map( (content,index) => 
      (<button onClick={()=>setCurrentIndex(index)}>{content.tab}</button>))}
      <div>
        {currentContent.text}
      </div>
    </div>
  );
} 
*/

export const useTabs = (initialIndex, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {currentContent : allTabs[currentIndex], setCurrentIndex}
}
