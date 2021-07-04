/* 
function App() {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(2, 2.5);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>My name is Wontae</p>
    </div>
  );
} 
*/

export const useFadeIn = (duration, delay) => {
    const element = useRef();
  
    useEffect( ()=> {
      if (element.current) {
        const {current} = element;
        current.style.opacity = 1;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
      }
    }, [])
  
    return {ref: element, style : {opacity: 0}};
  }
  