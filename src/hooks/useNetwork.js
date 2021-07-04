/* 
function App() {
  const isNetworkOnline = useNetwork();
  console.log(isNetworkOnline? 'Online':'Offline');
  return (
    <div className="App">
      <h1>{isNetworkOnline? 'Online':'Offline'}</h1>
    </div>
  );
}
*/
export const useNetwork = () => {
    const [state, setState] = useState(navigator.onLine); // navigator.online returns true or false
    function handleNetworkChange() {
      setState(navigator.onLine);
    }
  
    useEffect( ()=>{
      window.addEventListener('online', handleNetworkChange)
      window.addEventListener('offline', handleNetworkChange)
      return () => {
        window.removeEventListener('online', handleNetworkChange)
        window.removeEventListener('offline', handleNetworkChange)
  
      }
    }
    , [])
    return state
  }