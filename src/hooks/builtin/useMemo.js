import { useState, useMemo } from "react";
//* useMemo: 함수 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있음

const getAverage = numbers => {
    console.log("평균값 계산 중");
    if (numbers.length == 0) return 0;
    const sum = numbers.reduce( (a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");

    const onChange = e => {
        setNumber(e.target.value);
    }

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber("");
    }

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
                <b>평균값</b>{getAverage(list)}
            </div>
        </div>
    )
}

const useMemoAverage = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");

    const onChange = e => {
        setNumber(e.target.value);
    }

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber("");
    }

    const avg = useMemo( () => getAverage(list), [list]); 
    // 두번째 arg [] 내의 변수가 바뀔때만 getAverage가 호출된다

    return (
        <div>
            <input value={number} onChange={onChange}/>
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

export {Average, useMemoAverage};