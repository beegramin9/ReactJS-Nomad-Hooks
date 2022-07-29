import { useState, useMemo, useCallback } from "react";
//* useMemo와 비슷하게 렌더링 성능을 최적화할때 사용 가능
// 만들어 놓았던 함수를 재사용할 수 있음
// 대표적으로 이벤트리스너들, useMemo.js의 onChange와 onInsert는 리렌더링 될 때마다 실행이 되는데, 컴포넌트의 리렌더링이 자주 발생하거나 컴포넌트 개수가 많아지면 느려질 수 있다

const getAverage = numbers => {
    console.log("평균값 계산 중");
    if (numbers.length == 0) return 0;
    const sum = numbers.reduce( (a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); //! 아무것도 없으면 처음 렌더링될때만 함수 생성, useEffect랑 같음

    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber("");
    }, [number, list]) //! list 안이 바뀌었을때만 함수 재생성

    const avg = useMemo(getAverage(list), [list])

    return (
        <div>
            <input value={number} onChange={onChange}/>
            {/* input value가 변할 때마다 state가 수정되고 싹 다 rerendering되어서 getAverage도 실행되고, console.log가 계속 찍힙니다.
            인풋값만 바뀔때는 평균값을 다시 계산할 필요가 없으니 더 최적하하기위해 useMemo를 쓴다면 */}
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map( (val, idx) => {
                    <li key={idx}>{val}</li>
                })}
            </ul>
            <div>
                <b>평균값</b>{avg}
            </div>
        </div>
    )
}

export {Average};