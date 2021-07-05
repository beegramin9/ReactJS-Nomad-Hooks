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
import { useFullScreen } from "./hooks/useFullScreen";
import { arrayOfContent } from './constants/forUseTabs'; 
import { useNotification } from "./hooks/useNotification";
*/
import {useAxios} from "./hooks/useAxios"

function App() {
  const url = "https://yts.mx/api/v2/list_movies.json"
  const  {loading, data, error, refetchApi}= useAxios(url)
  // console.log(`loading:${loading}\ndata:${JSON.stringify(data)}\nerror:${error}`);
  // 여기서도 같은 오류가 발생한다. 이거 왜이래? 
  // usxAxios에 문제가 있는게 아니라 loading이 false로 바뀌기도 전에
  // 즉 data에 실제 값이 들어오기 전에 디스트럭쳐링을해서 그렇다
  // 결국 치우려면 내가 프로미스로 뭔갈 해줘야 함...

  // promise로 해줘야 하거나, 여기서 이렇게 해야되나?

  // loading 변수가 싫으면 loading 을 쓰지 않고 작동하게끔 useAxios를 바꿔야 하겠지
  
  
  if (!loading) {
    const {data: {data : {movies: arrayOfMovieData}}} = data
    console.log(arrayOfMovieData)
  }
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
export default App;
