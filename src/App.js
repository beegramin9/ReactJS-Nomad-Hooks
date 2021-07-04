import React, { useEffect, useState, useRef } from "react";
/* import { useInput } from "./hooks/useInput";
import { useTabs } from "./hooks/useTabs";
import { useTitle } from "./hooks/useTitle";
import { useClick } from "./hooks/useClick";
import { useConfirm } from "./hooks/useConfirm";
import { usePreventLeave } from "./hooks/usePreventLeave";
import { useBeforeLeave } from "./hooks/useBeforeLeave";
import { useFadeIn } from "./hooks/useFadeIn";
import { useScroll } from "./hooks/useScroll";
import { useFullscreen } from "./hooks/useFullscreen";
import { useNotification } from "./hooks/useNotification";
import { useAxios } from "./hooks/useAxios";
import { arrayOfContent } from './constants/forUseTabs'; 
*/

const useScroll = () => {
  const [state, setState] = useState( {x:0, y:0} )
  const handleScroll = () => {
    setState({x:window.scrollX, y:window.scrollY})
  }
  useEffect( ()=> {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return state
}


function App() {
  const {y} = useScroll();
  return (
    <div className="App" style={{height: '1000vh'}}>
      <h1 style={{ position: 'fixed', color: y > 100 ? "red": "blue"}}>hi</h1>
    </div>
  );
}

export default App;
