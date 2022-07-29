import {useRef} from "react";
// 로컬변수: 렌더링과 상관 없이 바뀔 수 있는 값

const RefSample = () => {
    const id = useRef(1); // 초기 ref 값 
    const setId = n => {
        id.current = n;
    }
    const printId = () => {
        console.log(id.current);
    }

    return (
        <div>
            refsample
        </div>
    )
}

export default RefSample;