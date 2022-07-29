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
        // if [], run once when useAxios render
        //
    }, [trigger])
    
    if (!options) {
        return;
    }
    /* useEffect가 시간이 많이 걸려서 loading: true일때의 state가 먼저
    return이 되기때문에 에러가 발생한다 */
    /* componentWillMount, DidMount는 render 전후 실행이 명확했지만,
    useEffect()는 대용으로 쓸 수는 있어도 시간이 걸리는 함수이기 때문에
    이와 같은 에러가 발생한다 */
    /* 굳이 loading이란 변수를 리턴하지 않고 할 수 없을까? */
    return {...state, refetchApi};
}