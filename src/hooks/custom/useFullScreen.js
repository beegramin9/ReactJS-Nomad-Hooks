/* 
function App() {
  const { element, triggerFullScreen, exitFullScreen} = useFullScreen();
  return (
    <div className="App">
      <div ref={element}>
        <img src="img/Eyes.png"/>
        <button onClick={exitFullScreen}>exit fullscreen</button>
      </div>
      <button onClick={triggerFullScreen}>make fullscreen</button>
    </div>
  );
} 
*/

export const useFullScreen = () => {
    const element = useRef();
    const triggerFullScreen = () => {
      element.current.requestFullscreen()
    }
    const exitFullScreen = () => {
      document.exitFullscreen()
    }
  
    return {element, triggerFullScreen, exitFullScreen}
}