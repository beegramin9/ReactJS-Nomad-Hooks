function App() {
    /* useRef는 document.getElementById 처럼 return 내의 component를 가져올 수 있음 */
    const potato = useRef();
    /* input의 이벤트 focus()는 박스 테두리 강화  */
    setTimeout(() => potato.current?.focus(), 3000);
    return (
      <div className="App">
        <div>Hi</div>
        <input ref={potato} placeholder="la" />
      </div>
    );
  }