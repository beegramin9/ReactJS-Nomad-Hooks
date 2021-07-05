import defaultAxios from "axios";
import { useEffect, useState } from "react";

/* 
function App() {
  const url = "https://yts.mx/api/v2/list_movies.json"
  const  {loading, data, error, refetchApi}= useAxios(url)
  // console.log(`loading:${loading}\ndata:${JSON.stringify(data)}\nerror:${error}`);
  return (
    <div>
      <div>
        <h1>{data && data.status}</h1>
        <h2>{loading && "Loading"}</h2>
      </div>
      <button onClick={refetchApi}>Refetch</button>
        <p>{JSON.stringify(data)}</p>
    </div>
  );
}
*/

/* axios는 객체에 정보를 받아오는데, 만약 받아오는 객체가 없다면
default값으로 defaultAxios를 사용한다. */
export const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        data: null,
        error: null
    })
    const [trigger, setTrigger ] = useState(0);
    const refetchApi = () => {
        setState({
            ...state,
            loading:true
        });
        setTrigger(Date.now()) /* 현재시간 */
    }
    useEffect( ()=>{
        /* Promise */
        axiosInstance(options).then(data => {
            setState({...state, loading: false, data: data})
        }).catch(error => {
            setState({...state, loading: false, error: error})
        }) 
    }, [trigger])
    
    if (!options) {
        return;
    }
    return {...state, refetchApi};
}