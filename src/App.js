import React, { useState } from "react";

function App() {
  /* ture/false를 return하는 함수이기만 하면
  validator로 사용 가능 */
  const maxLen = (value) => value.length < 10;
  /* !을 붙임으로써 부정 */
  const include = (value) => !value.includes("@");
  const name = useInput("Mr.", include);

  const [item, setItem] = useState(1);
  const incrementItem = () => {
    setItem(item + 1);
  };
  const decrementItem = () => {
    setItem(item - 1);
  };
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
      {/* ...object는 할당되지 않은 모든 값들을 가져옴 
      원래대로라면 value={value}, onChange={onChange}*/}
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;
