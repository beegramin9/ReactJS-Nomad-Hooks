/* 
function App() {
  useBeforeLeave();
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
} 
*/

export const useBeforeLeave = () => {
    function handleMouseLeave(event) {
      const {clientY} = event;
      if (clientY <= 0) { // 창 위로 나갈때에만 실행
        console.log('leaving');
      }
    }
  
    useEffect(()=> {
      document.addEventListener('mouseleave', handleMouseLeave)
      return () => document.removeEventListener('mouseleave',handleMouseLeave)
    } ,[])
  }
  