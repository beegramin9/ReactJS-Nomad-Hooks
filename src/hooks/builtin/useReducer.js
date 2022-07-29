import { useReducer } from "react";
//* state를 다른 값으로 reduce? 관리하는 방법

function numberReducer(state, action) {
    // action.type에 따라 다른 작업을 수행
    switch (action.type) {
        case "INCREMENT":
            return {value: state.value + 1}
        
        case "DECREMENT":
            return {value: state.value - 1}
        
        default:
            return state;
    }   
}


const Counter = () => {
    const [state, dispatch] = useReducer(numberReducer, {value: 0});
    
    return (
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({ type: "INCREMENT"})}>+1</button>
            <button onClick={() => dispatch({ type: "DECREMENT"})}>-1</button>
        </div>
    )
}

function inputReducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    const [state, dispatch] =useReducer(inputReducer, {
        name: "",
        nickname: ''
    })
    
    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target);
    }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export {Counter, Info};