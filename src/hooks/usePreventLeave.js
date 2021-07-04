/* 
function App() {
  const enablePrevent = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
    </div>
  );
}
*/

export const usePreventLeave = () => {
    const handleUnload = (e) => {
      e.preventDefault();
      e.returnValue = ""; // Only for Chrome
    }
    const enablePrevent = () => window.addEventListener('beforeunload',handleUnload)
    return enablePrevent;
}