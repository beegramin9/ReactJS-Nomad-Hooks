import React, {useRef, useEffect} from "react";

function App() {

    /* - 컴포넌트 내부의 변수 관리
    모든 React 컴포넌트는 reference prop을 가지고 있는데,
    ref={useRef()}로 useRef를 사용해서 가져오면 reference prop은 
    {current: HTMLHeadingElement} 의 형식으로 값을 반환한다
    이 current 속성은 값을 변경해도 상태를 변경할 때 처럼 
    React 컴포넌트가 다시 랜더링되지 않습니다. 
    React 컴포넌트가 다시 랜더링될 때도 마찬가지로 
    이 current 속성의 값이 유실되지 않습니다.*/

    const input = useRef();
    /* input의 이벤트 focus()는 박스 테두리 강화  */
    useEffect( () => {
      setTimeout(() => input.current.focus(), 3000);
    })
      
    return (
      <div className="App">
        <div>Hi</div>
        <input ref= {input} placeholder="la" />
      </div>
    );
  }