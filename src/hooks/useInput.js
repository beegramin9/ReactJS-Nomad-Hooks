/* 이게 왜 중요하냐!
이벤트를 다른 함수에서 handle할 수 있기 때문  */
export const useInput = (initialVlaue, validator) => {
    const [value, setVlaue] = useState(initialVlaue);
    /* 여기까지 value는 "Mr." 이라는 string이지만
    { value } 는 { value : value } 를 리턴함 */
    const onChange = (event) => {
      const {
        target: { value }
      } = event;
  
      let willUpdate = true;
  
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setVlaue(value);
      }
    };
  
    return { value, onChange }
}