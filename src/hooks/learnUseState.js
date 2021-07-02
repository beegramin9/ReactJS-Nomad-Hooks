import React, {useState} from "react";

const App = () => {
    /* [value, function that returns the changed value] = useState(the default value) */
    /* setValue(changed Value) == set the value to "changed value" */
    const [count, setCount] = useState(0);
    const [email, setEmail] = useState("");
    
    updateEmail(e) {
        const {target: {value}} = e
        setEmail(value)
    }
    return (
        <div>
            <button onClick={()=> setCount(count+1)}></button>
            <button onClick={()=> setCount(count-1)}></button>
            <input placeholder="Email" value={email} onChange={updateEmail}></input>
        </div>
    )
}

export default App;